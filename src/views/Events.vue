<template>
	<v-container >
		<v-layout wrap>
			
		<pre>{{activity}} </pre>

		<v-flex pa-3 v-for="event in events" :key="event" xs12 md12 >
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ event.name}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">${{ event.price}}</span><br>
            <span>{{ event.time }}</span><br>
            <span>{{ event.description }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
		</v-layout>
	</v-container>

</template>
<script>
import axios from 'axios'; 

export default {
	computed : {
		category () {
			return this.$route.params.category; 
		}
	},
	data () {
		return {
			activity:{}, 
			events:[]
		}
	},	
	mounted() {
		// axios.get('https://www.boredapi.com/api/activity').then(response => {
		// 	this.someData = response.data; 
		// }).catch(error => { console.log(error); })


		axios.get('/team1/graphql?category=' + this.category).then( response => {
			console.log(response.data); 
			this.activity  = response.data.activity; 
			this.events = response.data.events; 
		}).catch(error => {
			console.log(error);
		});
	} ,
	

}

</script>