$(document).ready(function() {
    
crystals = ["assets/images/whiteCrystal.png", "assets/images/redCrystal.png", "assets/images/blueCrystal.png", 
"assets/images/greenCrystal.png"];
var counter = 0;
var wins = 0;
var losses = 0;
var score = 0;
var total = 0;
var numberOptions= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var crystalValue=[];
// have computer pick a number between 19-120
        var targetNumber = 19 + Math.floor(Math.random() * 102);
        console.log(targetNumber);
        $('#computer').text(targetNumber);

// $("#randomNumber").text(targetNumber);

function randomOption(numberOptions) {
    for (var i =0; i < 4; i++){
     crystalValue.push(numberOptions[Math.floor(Math.random()*numberOptions.length)]);
    console.log(crystalValue);
}
}

console.log(randomOption(numberOptions));

function start () {
    var targetNumber = 19 + Math.floor(Math.random() * 102);
    $('#computer').text(targetNumber);
   counter = 0;
   $("#totalScore").text(counter);
   $("imageCrystal").replaceWith(imageCrystal, crystalValue, crystals);
}

$("#imageCrystal").on("click", ".crystalImage", function() {
    console.log($(this).attr("data-num"));
   counter = counter + parseInt($(this).data("num"));
   $("#totalScore").text(counter);
    if (counter === targetNumber) {
        wins++;
        $("#wins").text(wins);
        start();
    } else if (counter > targetNumber) {
        losses++;
        $("#losses").text(losses);
        start();
    }
});


function crystalImage () {
    for ( var i = 0; i < 4; i++) {
    var imageCrystal = $('<img>');
    imageCrystal.attr('data-num', crystalValue[i]);
    imageCrystal.attr('src', crystals[i]);
    imageCrystal.attr('alt', 'crystals');
    imageCrystal.addClass('crystalImage');
    $("#imageCrystal").append(imageCrystal);
    }
}

crystalImage();
});
// })



// function random_item(items)
// {
  
// return items[Math.floor(Math.random()*items.length)];
     
// }

// var items = [254, 45, 212, 365, 2543];
// console.log(random_item(items));

// for (var i = 0; i<numberOptions.length; i++) {
//     var crystal = $("<img>");

// }



// // for(var i = 0; i<numberOptions.length; i++) {
// // var imageCrystal = $("<img>");
// // imageCrystal.addClass("crystal-image");
// // imageCrystal.attr("data-crystalvalue" , numberOptions[i]);
// // $("#crystals").append(imageCrystal);
// // }

// $(".crystal-image").on("click", function() {
// }
// //     var crystalValue = ($(this).attr("data-crystalvalue"));
// //     crystalValue = parseInt(crystalValue);
// //     counter +=crystalValue;
// //     if(counter === targetNumber) {
// //         prompt("You win!");
// //     }
// //     else if(counter >= targetNumber) {
// //         promt("You lose!");
// //     }
// // });
