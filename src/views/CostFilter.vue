<template>
    <div> <!-- Vue needs a div after the template tag -->
        <center>
            <h1>Let's find you a thing to do.</h1></br>
            <h2>How much could you spend?</h2>
            <!-- Will need to collect filter selection for API call -->
            <v-btn color="green" dark large to="/ParticipantFilter">$0 - $15</v-btn></br>
            <v-btn color="green" dark large to="/ParticipantFilter">$15 - $50</v-btn></br>
            <v-btn color="green" dark large to="/ParticipantFilter">$50 or more</v-btn></br>
            <v-btn color="green" dark large to="/ParticipantFilter">Surprise me!</v-btn>
        </center>
    </div>
</template>
