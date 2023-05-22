<template>
  <div class="text-center">
    <v-dialog v-model="dialog" :disabled="disableDialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn :disabled="disableDialog" rounded variant="outlined" v-bind="props">Pesquisar usuários</v-btn>
      </template>

      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "CooperativeUsers",
  data() {
    return {
      dialog: false,
    }
  },
  props: {
    disableDialog: {
      type: Boolean,
      default: false
    }
  }
}
</script>