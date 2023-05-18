<template>
    <h4 style="color: gray;text-align: center;family: Comic Sans MS;">Amigos</h4>
    <br>

    <div
      v-for="amigo in this.amigos"
      :key="amigo.username"
      style="padding: 15px"
    >
        <AmigosCardHome color="green" :userName="amigo.name" />
    </div>
</template>



<script>
import AmigosCardHome from '../components/AmigosCardHome.vue';
import store from "../store";
import axios from "axios";

export default {
    name: "ListaAmigos",
    components: {
        AmigosCardHome
    },
    data() {
        return {
            amigos: store.state.amigos
        }
    },
    mounted() {
    store.state.page.title = "Perfil";

    const data = {
      user_id: store.state.user.id,      
    };

    axios
      .post(`${API_HOST}/users/id`, data, {
        "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
      })
      .then((response) => {
        store.state.user.name = response.data.name;
        store.state.user.email = response.data.email;
        store.state.user.password = response.data.password;
        store.state.user.username = response.data.username;
        store.state.user.followers = response.data.followers;
        store.state.user.following = response.data.following;
      })
      .catch((error) => {
        console.error("Erro:", error);
      });

    axios
      .post(`${API_HOST}/amigos/get`, data, {
        "Access-Control-Allow-Origin": "http://127.0.0.1:3001",
      })
      .then((response) => {
        store.state.amigos = response.data;
      })
      .catch((error) => {
        console.error("Erro:", error);
      });

  },
}
</script>