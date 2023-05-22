<template>
  <v-row justify="center">
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" size="40">
          <v-badge color="red" :content="this.amizades.length" >
            <v-avatar icon="mdi-account-multiple-plus-outline" size=40></v-avatar>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-card-text style="height: 200px;overflow: auto;">
          <div v-for="amizade in amizades" :key="amizade.id" class="mx-auto text-center">
            <h3> {{ amizade.username }} </h3>
            <v-btn rounded variant="text" color="green">
              Aceitar
            </v-btn>
            <v-btn rounded variant="text" color="red">
              Remover
            </v-btn>
            <v-divider class="my-3"></v-divider>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-row>
</template>

<script>

export default {
  name: "NotificacoesAmizades",
  data: () => ({
    amizades: [
      { id: 1, username: 'User1' },
      { id: 2, username: 'User2' },
      { id: 3, username: 'User3' }
    ]
  }),
}
</script>

