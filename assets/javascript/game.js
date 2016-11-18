console.log (5+6);
function numberRange(min, max) {
    var ranNum = Math.floor((Math.random() * (max - min + 1) + min));
    return ranNum;
}
var compNum = numberRange(19, 120);

var totalPoints = 0;

var yourNumber = 0;
var wins = 0;
var losses = 0;
var blue = numberRange(1, 12);
var purple = numberRange(1, 12);
var yellow = numberRange(1, 12);
var pink = numberRange(1, 12);

$(document).ready(function() {

    $("#number").text(totalPoints);

    $("#numberToGuess").text(compNum);

    $("#wins").text(wins);

    $("#loss").text(losses);

    

    $("#bluepony").on("click", function() {

        totalPoints += blue;


        $("#number").text(totalPoints);

        

        winLoss(totalPoints, compNum);


    });




    $("#purplepony").on("click", function() {

        totalPoints += purple;

        $("#number").text(totalPoints);

       

        winLoss(totalPoints, compNum);

    });



    $("#yellowpony").on("click", function() {

        totalPoints += yellow;

        $("#number").text(totalPoints);

       

        winLoss(totalPoints, compNum);


    });

    $("#pinkpony").on("click", function() {

        totalPoints += pink;

        $("#number").text(totalPoints);

        

        winLoss(totalPoints, compNum);

    });


});


function reset() {
     blue = numberRange(1, 12);
     purple = numberRange(1, 12);
     yellow = numberRange(1, 12);
     pink = numberRange(1, 12)

    compNum= numberRange(19, 120);

    playerNum = 0;
    
    $("#number").text(totalPoints);

    $("#numberToGuess").text(compNum);

    
};

//reset not working... 

function winLoss(playerNum, compNum) {

    if (playerNum === compNum) {
        alert("Pony Power!");
        wins++;
        totalPoints = 0;
        $("#wins").text(wins);
        reset();
    };

    if (playerNum > compNum) {
        alert("Pony Punked!");
        losses++;
        totalPoints = 0;
        $("#loss").text(losses);
        reset();
    };

//add music, fix reset

};


















