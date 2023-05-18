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
import AmigosCardHome from '@/components/AmigosCardHome.vue';

export default {
    name: "ListaAmigos",
    components: {
        AmigosCardHome
    },
    data() {
        return {
            // @TODO -> Trazer a lista de amigos
            amigos: [] 
        }
    },
}
</script>