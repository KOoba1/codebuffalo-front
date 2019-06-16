<template>
	<v-container >
		<v-layout wrap>

		<!-- <pre>{{activity}} </pre> -->
		<h2>{{ activity.activity }}</h2>
		<v-flex pa-3 v-for="event in events" :key="event.name" xs12 md12 >
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          :src="getImgFromTitle(event.name)"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span  class="headline"></span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span><b>{{ event.name}}</b></span><br>
            <span class="grey--text">{{ event.time }} | ${{ event.price}}</span><br>
            <span>{{ event.description }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Try It</v-btn>
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
			events:[],
			imageLinks:[
			{ title:'The Albright-Knox Art Gallery' ,
			 imgSrc:'https://media-cdn.tripadvisor.com/media/photo-s/09/43/48/69/the-museum-s-east-facade.jpg'},
			 { title:'The Buffalo Museum of Science' ,
			 imgSrc:'http://www.dfbuses.com/uploads/1/3/4/5/13451147/s753644566246030702_p325_i6_w400.jpeg'},
			 { title: 'The Buffalo History Museum',
		 	  imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Buffalo%26Erie_County_Historical_Society.jpg'},
			  { title: 'Frank Lloyd Wright\'s Martin House Complex',
 		 	  imgSrc: 'http://doclibrary.com/MSC146/CMM/ban3.jpg'},
			  { title: 'Nietzsche\’s',
 		 	  imgSrc: 'https://buffaloah.com/a/allen/248/jpegs/17.jpg'},
			  { title: 'Rec Room',
 		 	  imgSrc: 'https://www.buffalorising.com/wp-content/uploads/2018/09/Rec-Room-Buffalo-NY-2018-8.jpg'},
			  { title: 'Buffalo Iron Works',
 		 	  imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKHZ5TAV5aPXmvNV03Wg-h9MCJ5MI8l0A4dmWmPR5wU76Jfr7'},
			  { title: 'Guitar Center',
 		 	  imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNXZq8yo1dONgBWSpME5WcjBr8PQJ7GyXNpn9Zdadu95Ok16gD'},
			  { title: 'The Foundry',
 		 	  imgSrc: 'https://classiceventsbuffalo.com/wp-content/uploads/2018/07/Banner-Image-Foundry-1-min.jpg'},
			  { title: 'Union Road Blood Donation Center',
 		 	  imgSrc: 'http://mediad.publicbroadcasting.net/p/wbfo/files/styles/x_large/public/201610/red_cross_buffalo_sign.jpg'},
			  { title: 'Toolbox OR Planter - Woodworking Class at The Foundry',
 		 	  imgSrc: 'https://i.ytimg.com/vi/h62RjdlT7k0/maxresdefault.jpg'}
			 ]


		}
	},
	mounted() {
		// axios.get('https://www.boredapi.com/api/activity').then(response => {
		// 	this.someData = response.data;
		// }).catch(error => { console.log(error); })


		axios.get('/team1/graphql?category=' + this.category, {port: 8080 } ).then( response => {
			console.log(response.data);
			this.activity  = response.data.activity;
			this.events = response.data.events;
		}).catch(error => {
			console.log(error);
		});
	} ,
	methods :{
		getImgFromTitle(title){
			var result = this.imageLinks.find( item => { return item.title == title});

			if (result ){
				return result.imgSrc;
			}
			else {
				return 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
			}
		}
	}


}

</script>
