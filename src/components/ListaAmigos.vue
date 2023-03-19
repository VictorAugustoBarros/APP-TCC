<template>
    <h3>Amigos (129 online)</h3>
    <AmigosCardHome color="green" userName="Zezinho" />
    <AmigosCardHome color="green" />
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