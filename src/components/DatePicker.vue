<template>
  <v-text-field type="date" label="Date"></v-text-field>


</template>

<script>
export default {
  name: "DatePicker",
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        landscape: false,
        reactive: false
      }
    }
  }
</script>