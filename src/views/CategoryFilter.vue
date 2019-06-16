<template>
    <div> <!-- Vue needs a div after the template tag -->
        <center>
            <h1>Let's find you a thing to do.</h1></br>
            <h2>What are you in the mood for?</h2>
            <!-- Will need to collect filter selection for API call -->
            <v-btn to="/Events/SocialButterfly" color="blue" block dark large>Social Butterfly</v-btn>
            <v-btn to="/Events/Creative" color="blue" block dark large>Creative</v-btn>
        <v-btn to="/Events/Fun" color="blue" block dark large>Fun</v-btn>
        <v-btn to="/Events/ChillMaster" color="blue" block dark large>Chill Master</v-btn>

</center>
</div>
</template>
