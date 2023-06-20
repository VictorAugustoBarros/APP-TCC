<template>
    <div>
        <v-row style="height: 10vh;"></v-row>
        <v-row style="height: 10vh;text-align: center;justify-content: center;">
            <h1>Recuperação Senha</h1>
        </v-row>
        <v-row>
            <v-col cols="5"></v-col>
            <v-col cols="2">
                <form class="register-form">
                    <v-text-field label="Email" v-model="email" variant="outlined" :error="!email"
                        :success="email"></v-text-field>
                    <div class="form-group">
                        <v-btn rounded variant="outlined" @click="enviarRecuperacao">Enviar Código Recuperação</v-btn>
                    </div>
                </form>
            </v-col>
            <v-col cols="5"></v-col>
        </v-row>
        <v-row v-if="codigoEnviado">
            <v-col cols="5"></v-col>
            <v-col cols="2">
                <v-divider />
            </v-col>
            <v-col cols="5"></v-col>
        </v-row>
        <v-row>
            <v-col cols="5"></v-col>
            <v-col cols="2">
                <form v-if="codigoEnviado" class="register-form" @submit.prevent="registerUser">
                    <v-text-field label="Código" v-model="hash" variant="outlined" :error="!hash"
                        :success="hash"></v-text-field>
                    <div class="form-group">
                        <v-btn rounded variant="outlined" @click="validarCodigoHash">Validar Código</v-btn>
                    </div>
                </form>
            </v-col>
            <v-col cols="5"></v-col>
        </v-row>
        <v-row v-if="hashValido">
            <v-col cols="5"></v-col>
            <v-col cols="2">
                <v-divider />
            </v-col>
            <v-col cols="5"></v-col>
        </v-row>
        <v-row>
            <v-col cols="5"></v-col>
            <v-col cols="2">
                <form v-if="hashValido" class="register-form" @submit.prevent="registerUser">
                    <v-text-field type="password" label="Senha" v-model="password" variant="outlined" :error="!password"
                        :success="password"></v-text-field>
                    <v-text-field  type="password" label="Confirmação Senha" v-model="passwordVerify" variant="outlined"
                        :error="password !== passwordVerify" :success="password === passwordVerify"></v-text-field>
                    <div class="form-group">
                        <v-btn rounded variant="outlined" @click="atualizarSenhaUser">Atualizar Senha</v-btn>
                    </div>
                </form>
            </v-col>
            <v-col cols="5"></v-col>
        </v-row>
    </div>
</template>
  
<script>
import { enviarRecuperacaoSenha, validarHash, atualizarSenha } from '@/services/reset_password';

export default {
    name: "PasswordRecovery",
    data() {
        return {
            email: "",
            hash: "",
            password: "",
            passwordVerify: "",
            codigoEnviado: false,
            hashValido: false,
        };
    },
    methods: {
        async enviarRecuperacao() {
            if (!this.email) {
                alert("Favor digitar o email!")
                return;
            }
            const result = await enviarRecuperacaoSenha(this.email);
            this.codigoEnviado = true;
        },
        async validarCodigoHash() {
            if (!this.hash) {
                alert("Favor digitar o hash!")
                return;
            }
            const result = await validarHash({ email: this.email, hash: this.hash });
            if (result.success) {
                this.hashValido = true;
            } else {
                alert("Hash inválido!")
                this.hashValido = false;
            }
        },
        async atualizarSenhaUser() {
            if (!this.password || !this.passwordVerify) {
                alert("Favor digitar suas novas credenciais de acesso!")
                return;
            }
            if (this.password !== this.passwordVerify){
                alert("As senhas não se correspondem!")
                return;
            }

            const result = await atualizarSenha({ email: this.email, password: this.password });
            if (result.success) {
                alert("Senha alterada com sucesso!")
                this.hashValido = true;
                this.$router.push({ path: "/login" });
            }
        },
    },
};
</script>
  
<style>
.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
</style>
  