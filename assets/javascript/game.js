// four crystal buttons
// each crystal generates a random number 1-12
//      hide that number until player clicks
//      when clicked update player's score counter
// display random number for randomScore 19-120
// If player score is greater than randomScore player recieves lose++
//      restart game
// else if player score equals randomScore player recieves win++ 
//      restart game
// at start/restart game random crystals buttons and randomScore

$(document).ready(function(){
    // Generate random vales
    var randomScore = Math.floor(Math.random() * 101) + 19;
    var gem1 = Math.floor(Math.random() * 11) + 1;
    var gem2 = Math.floor(Math.random() * 11) + 1;
    var gem3 = Math.floor(Math.random() * 11) + 1;
    var gem4 = Math.floor(Math.random() * 11) + 1;
    var userScore = 0;
    var wins = 0;
    var loses = 0;

    // initalize values
    $('.randomScore').text(randomScore);
    $('.playerScore').text(userScore);

    // add gems to user score
    $('#gem1').click(function(){
        userScore += gem1;
        $('.playerScore').text(userScore);
    });
    $('#gem2').click(function(){
        userScore += gem2;
        $('.playerScore').text(userScore);
    });
    $('#gem3').click(function(){
        userScore += gem3;
        $('.playerScore').text(userScore);
    });
    $('#gem4').click(function(){
        userScore += gem4;
        $('.playerScore').text(userScore);
    });
});
