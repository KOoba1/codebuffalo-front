<template>
    <div> <!-- Vue needs a div after the template tag -->
        <center>
            <h1>Let's find you a thing to do.</h1></br>
            <h2>Bringing anyone with you?</h2>
            <!-- Will need to collect filter selection for API call -->
            <v-btn color="pink" dark large block to="/CategoryFilter">just me</v-btn>
            <v-btn color="pink" dark large block to="/CategoryFilter">A group</v-btn>
        </center>
    </div>
</template>
