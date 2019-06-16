<template>
  <v-container>
    <v-layout
    text-xs-center
    wrap
    >
    <v-flex xs12 pa-4>
      <h1 style="font-size:40px">Welcome to <span style="color:#DD541B;">Buffalo</span>!</h1></br>
      <body style="font-size: 18px">Bored? Let's find you something to do.</body>
  </br>

    <!-- </v-flex>
    <v-flex>
     <v-carousel
     hide-delimiters
     m-5 p-5
      >
      <v-carousel-item

      v-for="(item,i) in items"

      :key="i"
      :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-flex xs12 mt-50>


  </v-flex> -->
  </v-flex>
</v-layout>
<v-flex xs12 px-5 mx-5>


     <v-card>
       <v-container
         fluid
         grid-list-md
       >
       <h2>Sponsored Events:</h2></br>
         <v-layout row wrap>
           <v-flex
             v-for="card in cards"
             :key="card.title"
             v-bind="{ [`xs${card.flex}`]: true }"
           >
             <v-card>
               <v-img
                 :src="card.src"
                 height="200px"
               >
                 <v-container
                   fill-height
                   fluid
                   pa-2
                   justify-Center
                 >
                   <v-layout fill-height>
                     <v-flex xs12 align-end flexbox>
                       <span class="headline white--text" v-text="card.title"></span>
                     </v-flex>
                   </v-layout>
                 </v-container>
               </v-img>

               <v-card-actions>
                   FREE
                 <v-spacer></v-spacer>
                 <v-btn icon>
                   <v-icon>favorite</v-icon>
                 </v-btn>
                 <v-btn icon>
                   <v-icon>bookmark</v-icon>
                 </v-btn>
                 <v-btn icon>
                   <v-icon>share</v-icon>
                 </v-btn>
               </v-card-actions>
             </v-card>
           </v-flex>
         </v-layout>
       </v-container>
     </v-card>
     <v-toolbar>
       <v-btn color="#DD541B" dark to="/Weekly">Weekly Challenge</v-btn><v-spacer></v-spacer>Complete tasks to win prizes!<v-spacer></v-spacer><v-divider vertical></v-divider><v-spacer></v-spacer>
       <v-btn color="#DD541B" to="/CostFilter" justify=Center dark>Help me choose!</v-btn><v-spacer></v-spacer>Find the right event!
     </v-toolbar>
   </v-flex>

   <!-- <v-toolbar>
     <v-btn color="#DD541B" dark to="/Weekly">Weekly Challenge</v-btn><v-spacer></v-spacer>Complete tasks with friends to win prizes!

   </v-toolbar> -->


</v-container>
</template>

<script>
  export default {
   data() {
    return {
        cards: [
          { src: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F62842329%2F208040846788%2F1%2Foriginal.20190524-145743?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=064b1e4239bb8abea653ba46803c94c6'
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
