<template>
  <h1>Teste</h1>
</template>

<script>
import { store } from '../store.js'


export default {
  name: 'ObjetivoPage',
  data: function () {
    return {
      store
    }
  },
  mounted() {
    store.page.title = "Objetivos"
  }
}

</script>