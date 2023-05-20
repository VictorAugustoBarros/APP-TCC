<template>
    <h4 style="color: gray;text-align: center;family: Comic Sans MS;">Amigos</h4>
    <br>

    <div v-for="amigo in this.getAmigos()" :key="amigo.username" style="padding: 15px">
        <AmigosCardHome color="green" :userName="amigo.name" />
    </div>
</template>



<script>
import AmigosCardHome from '@/components/AmigosCardHome';
import { mapGetters } from "vuex";

export default {
    name: "ListaAmigos",
    components: {
        AmigosCardHome
    },
    methods: {
        ...mapGetters("user", ["getAmigos"]),
    },
    data() {
        return {
            // @TODO -> Trazer a lista de amigos
            amigos: []
        }
    },
}
</script>