<template>
  <div id="body">
    <div class="container" id="container">
      <div class="form-container sign-up-container">
        <form class="register-form" @submit.prevent="registerUser">
          <h1 class="h1">Registrar</h1>
          <span v-if="register.successMessage" class="success-text">{{
            register.successMessage
          }}</span>
          <span v-if="register.errorMessage" class="error-text">{{
            register.errorMessage
          }}</span>
          <input type="text" class="input" id="nomeRegister" v-model="register.name" placeholder="Nome" />
          <input class="input" id="usernameRegister" v-model="register.username" placeholder="Username" />
          <input class="input" type="email" id="emailRegister" v-model="register.email" placeholder="Email" />
          <input class="input" type="password" id="passwordRegister" v-model="register.password" placeholder="Senha" />
          <v-btn rounded variant="text" @click="registerUser()"> Registrar </v-btn>
        </form>
      </div>

      <div class="form-container sign-in-container">
        <form class="form" action="#">
          <h1 class="h1">Login</h1>
          <span v-if="login.successMessage" class="success-text">{{
            login.successMessage
          }}</span>
          <span v-if="login.errorMessage" class="error-text">{{
            login.errorMessage
          }}</span>
          <input class="input" id="emailForm" v-model.trim="login.email" :class="{ 'error-border': login.email === '' }"
            type="email" placeholder="Email" required />
          <input class="input" id="passwordForm" v-model.trim="login.password" type="password" placeholder="Senha"
            required />
          <a class="a" href="#">Forgot your password?</a>
          <v-btn rounded variant="text" @click="submitLogin()"> Entrar </v-btn>
        </form>
      </div>

      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1 class="h1">Olá, Amigo!</h1>
            <p class="p">
              Introduza os seus dados pessoais e comece a evoluir com nós
            </p>
            <v-btn rounded variant="text" @click="signIn()"> Entrar </v-btn>
          </div>
          <div class="overlay-panel overlay-right">
            <h1 class="h1">Bem Vindo!</h1>
            <p class="p">
              Para se manter conectado conosco, faça o login com suas
              informações pessoais
            </p>
            <v-btn rounded class="ghost" variant="text" @click="signUp()">
              Registrar
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authLogin} from '@/services/auth'
import {GetUserData, ActionRegisterUser} from '@/services/users'
import {GetUserAmigos} from '@/services/user_amigos'
import {LoadObjetivos} from '@/services/objetivos'
import {GetUserCriterios} from '@/services/criterios'

export default {
  name: "LoginPage",
  data() {
    return {
      register: {
        name: "",
        username: "",
        email: "",
        password: "",
        errorMessage: "",
        successMessage: "",
      },

      login: {
        email: "",
        password: "",
        errorMessage: "",
        successMessage: "",
      },
    };
  }
  , methods: {
    async submitLogin() {
      if (this.login.email === "" || this.login.password === "") {
        this.login.errorMessage = "Preencha todos os campos.";
        return;
      }

      const response = await authLogin({
        email: this.login.email,
        password: this.login.password
      })

      if (response.success) {
        this.login.errorMessage = null

        await GetUserData();
        await GetUserAmigos();
        await LoadObjetivos();
        await GetUserCriterios();

        this.$router.push({ name: 'app.feed' })

      } else {
        this.login.errorMessage = response.error
      }
    },
    async registerUser() {
      if (
        this.register.name === "" ||
        this.register.email === "" ||
        this.register.username === "" ||
        this.register.password === ""
      ) {
        this.register.errorMessage = "Preencha todos os campos.";
        return;
      }

      const payload = {
        "name": this.register.name,
        "email": this.register.email,
        "password": this.register.password,
        "username": this.register.username
      }
      let response = await ActionRegisterUser(payload)
      if (response.success) {
        this.register.successMessage = "Usuário cadastrado com sucesso!";
        this.register.errorMessage = null
        this.signIn();
        
      } else {
        this.register.successMessage = null
        this.register.errorMessage = response.error
      }
    },
    signUp() {
      const container = document.getElementById("container");
      container.classList.add("right-panel-active");
    },
    signIn() {
      const container = document.getElementById("container");
      container.classList.remove("right-panel-active");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

.error-text {
  color: red;
}

.success-text {
  color: green;
}

* {
  box-sizing: border-box;
}

#body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
}

.h1 {
  font-weight: bold;
  margin: 0;
}

.p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

#container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {

  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #4314c4, #4314c4);
  background: linear-gradient(to right, #4314c4, #4314c4);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
</style>