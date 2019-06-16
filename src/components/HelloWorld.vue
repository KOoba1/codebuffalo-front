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
    <v-flex xs12 mt-50>
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
            src: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F62842329%2F208040846788%2F1%2Foriginal.20190524-145743?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=064b1e4239bb8abea653ba46803c94c6'
          },
          {
            src: 'https://pbs.twimg.com/media/DlSKYlsXoAASBS3.jpg'
          }
        ]
    }
  }
}
</script>

<style>

</style>
