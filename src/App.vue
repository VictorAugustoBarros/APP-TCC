<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import authStore from "@/store/authStore";


export default {
  name: "App",
  mounted() {
    const auth = authStore()

    if (!auth.getToken){
      this.$router.push ({"path": "/login"})
    }
  },
};
</script>