<template>
  <v-container>
    <v-layout
    text-xs-center
    wrap
    >
    <v-flex xs12 pa-5>
      <h2>Welcome to <span style="color:#DD541B">Buffalo</span>!</h2>
    </v-flex>
    <v-flex xs12 pa-3>
     <v-carousel >
      <v-carousel-item

      v-for="(item,i) in items"

      :key="i"
      :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-flex xs12 mt-2>
    <v-toolbar>
      <v-btn color="primary" to="/Weekly">Weekly Challenge</v-btn><v-divider
      class="mx-3"
      inset
      vertical
    ></v-divider> <v-spacer></v-spacer> <v-divider
      class="mx-3"
      inset
      vertical
    ></v-divider>Some oragne thing

    </v-toolbar>
  </v-flex>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
  export default {
   data() {
    return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
    }
  }
}
</script>

<style>

</style>
