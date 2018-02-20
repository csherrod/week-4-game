$(document).ready(function() {
    
crystals = ["assets/images/whiteCrystal", "assets/images/redCrystal", "assets/images/blueCrystal", 
"assets/images/greenCrystal"];
var counter = 0;
var numberOptions= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// have computer pick a number between 19-120
        var targetNumber = 19 + Math.floor(Math.random() * 102);
        console.log(targetNumber);
        $('#computer').text(targetNumber);

// $("#randomNumber").text(targetNumber);

function randomOption(numberOptions) {
    for (var i =0; i < 4; i++){
    return numberOptions[Math.floor(Math.random()*numberOptions.length)];
}
}

console.log(randomOption(numberOptions));

$(".crystal").on("click", function() {
    console.log("You clicked me");
    crystal = randomOption;
    randomOptions.push(counter);

});
});
// })
//     var imageCrystal = $('<img>');
//     imageCrystal.attr('data-num', numberOptions[i]);
//     imageCrystal.attr('src', crystals[i]);
//     imageCrystal.attr('alt', 'crystals');
//     imageCrystal.addClass('crystalImage')
//     $('#crystals').append(imageCrystal);


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
