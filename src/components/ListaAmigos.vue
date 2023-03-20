<template>
    <h4 style="color: gray;text-align: center;family: Comic Sans MS;">Amigos (129 online)</h4>
    <br>
    <AmigosCardHome color="green" userName="Zezinho" />
    <AmigosCardHome color="green" userName="Zezinha" />
    <AmigosCardHome color="green" />
    <AmigosCardHome color="green" />
    <AmigosCardHome color="red" />
    <AmigosCardHome color="red" />
    <AmigosCardHome color="green" />
    <AmigosCardHome color="red" />
</template>



<script>
import AmigosCardHome from '../components/AmigosCardHome.vue';

export default {
    name: "ListaAmigos",
    components: {
        AmigosCardHome
    },
}
</script>