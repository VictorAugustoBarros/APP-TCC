<template>
  <h1></h1>
</template>

<script>
import { store } from '../store.js'



export default {
  name: 'FeedPage',
  data: function () {
    return {
      store
    }
  },
  mounted()  {
    store.page.title = "Feed"
  }
}

</script>