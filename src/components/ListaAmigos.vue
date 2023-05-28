<template v-if="load">
    <h4 style="color: gray;text-align: center;family: Comic Sans MS;">Amigos</h4>
    <br>

    <h3 style="text-align: center;" v-if="this.amigos.length == 0">Você ainda não tem amigos!</h3>
    <div v-for="amigo in this.amigos" :key="amigo.username" style="padding: 15px">
        <AmigosCardHome color="green" :userName="amigo.username" :userIcon="amigo.userIcon" />
    </div>
</template>

<script>
import AmigosCardHome from '@/components/AmigosCardHome';

export default {
    name: "ListaAmigos",
    components: {
        AmigosCardHome
    },
    props: {
        amigos: {
            type: Array,
            default: function () {
                return [];
            }
        }
    }
}
</script>