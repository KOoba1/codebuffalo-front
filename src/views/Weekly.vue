<template>
  <v-container>
    <v-layout
    text-xs-center
    wrap
    >
    <v-flex xs12 pa-4>
      <h1 style="font-size:40px">Weekly Challenge: Food For Good</h1></br>
      <body style="font-size: 18px">Complete these tasks to enter to win a free burrito at Chipotle with a friend!</br>Must check-in with a friend to complete. Verified by FourSquare.</body>
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
       <h2>Tasks:</h2></br>
         <v-layout row wrap>
           <v-flex
             v-for="card in cards"
             :key="card.title"
             v-bind="{ [`xs${card.flex}`]: true }"
           >
             <v-card>
               <v-img
                 :src="card.src"
                 height="100px"
               >
                 <v-container
                   fill-height
                   fluid
                   pa-2
                   justify-Center
                 >
                   <v-layout fill-height>
                     <v-flex xs12 align-end flexbox>
                       <span class="headline black--text" v-text="card.title"></span>
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
       <v-btn color="#DD541B" dark to="/Weekly">Invite a Friend</v-btn>Choose a friend to help you complete these tasks!<v-spacer></v-spacer>
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
          { title: 'Donate to a local food bank.'
          },
          {
            title: 'Host a potluck with 3+ friends.'
          }
        ]
    }
  }
}


</script>

<style>

</style>
