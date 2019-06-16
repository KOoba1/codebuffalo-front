<template>
	<v-container fluid>
		<v-layout>
			 <v-img
      height="500"
      src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
    >  <v-layout wrap>
    
        <v-layout
          align-start
          column
          justify-end
          pt-4
          mt-5
        >
          <h1 style="color:white; font-size:56px !important" class="headline">Weekly Challenge</h1>
          <br>
          <span class="grey--text text--lighten-1" style="font-size:24px">This Week: Food for Good</span>
        </v-layout>
      </v-layout>
    </v-img>
		</v-layout>
		<v-layout>
			<pre>{{ someData }} </pre>
		</v-layout>
	</v-container>

</template>
<script>
import axios from 'axios'; 

export default {

	data () {
		return {
			someData:{}
		}
	},	
	mounted() {
		axios.get('/api/team1/graphql?category=Creative').then( response => {
			console.log(response.data); 
		}).catch(error => {
			console.log(error);
		});
	} ,
	

}

</script>