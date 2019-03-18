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


    // write values to DOM
    $('.randomScore').text(randomScore);
    $('.playerScore').text(userScore);

    // add gems to user score
    $('#gem1').click(function(){
        userScore += gem1;
        $('.playerScore').text(userScore);
        compare(userScore, randomScore);
    });
    $('#gem2').click(function(){
        userScore += gem2;
        $('.playerScore').text(userScore);
        compare(userScore, randomScore);

    });
    $('#gem3').click(function(){
        userScore += gem3;
        $('.playerScore').text(userScore);
        compare(userScore, randomScore);

    });
    $('#gem4').click(function(){
        userScore += gem4;
        $('.playerScore').text(userScore);
        compare(userScore, randomScore);

    });

    function reset() {
         userScore = 0;
         randomScore = Math.floor(Math.random() * 101) + 19;
         gem1 = Math.floor(Math.random() * 11) + 1;
         gem2 = Math.floor(Math.random() * 11) + 1;
         gem3 = Math.floor(Math.random() * 11) + 1;
         gem4 = Math.floor(Math.random() * 11) + 1;
         $('.randomScore').text(randomScore);
         $('.playerScore').text(userScore);
         return  userScore, randomScore, gem1, gem2, gem3, gem4;
    }


    function compare(userScore, randomScore){
    if (userScore === randomScore) {
        reset();
        wins++;
        $('.wins').text("Wins: " +wins);
        return wins;
    }
    else if (userScore > randomScore){
        reset();
        loses++; 
        $('.loses').text("Loses: " +loses);
        return loses;
        
    }
    }
     
    
});
