<template>
    <v-card-text style="background-color:transparent">
        <v-text-field variant="none" style="background-color: #cfd5e1;border-radius: 15px"  density="compact"
            label="Buscar Amigos" append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick">
        </v-text-field>
    </v-card-text>
</template>


<script>
export default {
    name: "SearchBox",
    data: () => ({
        loaded: false,
        loading: false,
    }),

    methods: {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
    },
}
</script>