<template>
  <v-card width="275" style="border-radius: 20px;">
    <v-img 
        class="align-end text-white"
        height="200"
        :src="image"
        cover
    >
    <v-card-title>{{ title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ subtitle }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{descricao}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="blue">
        Detalhes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
  
<script>

export default {
    name: 'CardOjetivo',
    props: {
        title: {
            type: String
        },
        subtitle: {
            type: String
        },
        descricao: {
            type: String
        },
        image: {
            type: String
        }
    }
}
</script>