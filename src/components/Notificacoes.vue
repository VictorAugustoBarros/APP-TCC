<template>
  <v-row justify="center">
    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" size="40">
          <v-badge color="red" :content="this.notificacoes.length" >
            <v-avatar icon="mdi-bell-outline" size=40></v-avatar>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-card-text style="height: 200px;overflow: auto;">
          <div v-for="notificacao in notificacoes" :key="notificacao.id" class="mx-auto text-center">
            <h3> {{ notificacao.descricao }} </h3>
            <v-divider class="my-3" />
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-row>
</template>

<script>

export default {
  name: "NotificacoesDropdown",
  data: () => ({
    notificacoes: [
      { id: 1, descricao: 'User1 te enviou um teste' },
      { id: 2, descricao: 'User2 te enviou um teste' },
      { id: 3, descricao: 'Teste3' },
      { id: 3, descricao: 'Teste3' },
      { id: 3, descricao: 'Teste3' },
      { id: 3, descricao: 'Teste3' },
      { id: 3, descricao: 'Teste3' },
    ]
    }),
}
</script>

