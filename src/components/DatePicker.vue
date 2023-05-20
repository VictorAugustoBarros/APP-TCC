<template>
  <v-text-field type="date" :label="labelName" />
</template>

<script>
export default {
  name: "DatePicker",
  props: {
    labelName: {
      type: String
    }
  }
}
</script>