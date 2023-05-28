<template>
  <div style="justify-content: center;text-align: center;">
    <div class="fof position" style="widht: 100%;height: 500px;">
      <h1>Error 404</h1>
    </div>
    <v-btn rounded variant="text" @click="returnHome">
      Home
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "404Page",
  methods: {
    returnHome() {
      this.$router.push({ "name": "app" })
    }
  },
}
</script>

<style>
.position {
  display: flex;
  align-items: center;
  justify-content: center;

}

* {
  transition: all 0.6s;
}

body {
  font-family: 'Lato', sans-serif;
  color: #888;
  margin: 0;
}

.fof h1 {
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
  animation: type .5s alternate infinite;
}

@keyframes type {
  from {
    box-shadow: inset -3px 0px 0px #888;
  }

  to {
    box-shadow: inset -3px 0px 0px transparent;
  }
}
</style>