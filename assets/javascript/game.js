var jaina = {
	"name": "Jaina",
	"healthPoints": 100,
	"attackPower": 10,
	"counterAttackPower": 15
};

var azmodan = {
	"name": "Azmodan",
	"healthPoints": 150,
	"attackPower": 15,
	"counterAttackPower": 10
};

var johanna = {
	"name": "Johanna",
	"healthPoints": 400,
	"attackPower": 15,
	"counterAttackPower": 5
};

var murky = {
	"name": "Murky",
	"healthPoints": 50,
	"attackPower": 25,
	"counterAttackPower": 5
};

var jainaStatsUpdate = $(".jaina");
	jainaStatsUpdate.attr("healthPoints", jaina.healthPoints);
	jainaStatsUpdate.attr("attackPower", jaina.attackPower);
	jainaStatsUpdate.attr("counterAttackPower", jaina.counterAttackPower);

var azmodanStatsUpdate = $(".azmodan");
	azmodanStatsUpdate.attr("healthPoints", azmodan.healthPoints);
	azmodanStatsUpdate.attr("attackPower", azmodan.attackPower);
	azmodanStatsUpdate.attr("counterAttackPower", azmodan.counterAttackPower);

var johannaStatsUpdate = $(".johanna");
	johannaStatsUpdate.attr("healthPoints", johanna.healthPoints);
	johannaStatsUpdate.attr("attackPower", johanna.attackPower);
	johannaStatsUpdate.attr("counterAttackPower", johanna.counterAttackPower);

var murkyStatsUpdate = $(".murky");
	murkyStatsUpdate.attr("healthPoints", murky.healthPoints);
	murkyStatsUpdate.attr("attackPower", murky.attackPower);
	murkyStatsUpdate.attr("counterAttackPower", murky.counterAttackPower);


$(".chosenCharacters").click(function(){
	$(this).removeClass("nonChosenCharacters");
	$(".nonChosenCharacters").removeClass("chosenCharacters")
		.removeClass("nonChosenCharacters")
		.appendTo(".enemiesCharacters")
		.addClass("enemyCharacter");


	$(".enemyCharacter .contentContainer").removeClass("contentContainer")
		.addClass("contentContainer2");

    if ($(".defenderSection").is(":empty") && $(this).hasClass("enemyCharacter")) {
    	$(this).appendTo(".defenderSection")
    		.removeClass("enemyCharacter")
    		.addClass("defenderCharacter");
    		
		$(".defenderCharacter .contentContainer2").removeClass("contentContainer2")
			.addClass("contentContainer3");
    }
});


$(".attackButton").on("click", function(){
	var defenderCurrentHealth = parseInt($(".defenderCharacter").attr("healthPoints")) - parseInt($(".chosenCharacters").attr("attackPower"));
	$(".defenderCharacter").attr("healthPoints", defenderCurrentHealth);
	defenderCurrentHealth = defenderCurrentHealth;
		console.log(defenderCurrentHealth);

	$(".defenderCharacter .healthPoints").html(defenderCurrentHealth);	
	console.log(defenderCurrentHealth);
	// console.log($(".defenderSection"));
	// console.log(jaina.healthPoints -= parseInt(johanna.counterAttackPower)); 
})




// $(".btn").click(function(){
 var defenderHealthLoss = parseInt($(".defender").attr('healthPoints')) - parseInt($(".champ").attr('attackPower'));
// $(".defender").attr("healthPoints", defenderHealthLoss);
// var updateNumber = (defenderHealthLoss);
// document.querySelector(".grumpyP").innerHTML = updateNumber;
//  console.log("Grumpy cat's health: " + defenderHealthLoss);
 		//var counterAttack = parseInt($(".champ").attr('healthPoints')) - parseInt($(".defender").attr('counterAttackPower'));
 		//defender counter attacking champ
// })






// $(".enemiesCharacters").click(function(){
// 	// alert("Enemy Character has been clicked");
// 	console.log(this);
// 	if($(".defenderSection").is(":empty")){
// 		alert("Empty");
// 	}else{
// 		alert("Not working");
// 	}
// });


// $(".yourCharacter1").one("click", function(){
// 	$(".yourCharacter2").appendTo(".enemiesCharacters").addClass("enemyCharacter2").removeClass("yourCharacter2");
// 	$(".azmodanContentContainer").addClass("azmodanContentContainer2").removeClass("azmodanContentContainer");

// 	$(".yourCharacter3").appendTo(".enemiesCharacters").addClass("enemyCharacter3").removeClass("yourCharacter3");
// 	$(".johannaContentContainer").addClass("johannaContentContainer2").removeClass("johannaContentContainer");

// 	$(".yourCharacter4").appendTo(".enemiesCharacters").addClass("enemyCharacter4").removeClass("yourCharacter4");
// 	$(".murkyContentContainer").addClass("murkyContentContainer2").removeClass("murkyContentContainer");

// });

// $(".yourCharacter2").one("click", function(){
// 	$(".yourCharacter1").appendTo(".enemiesCharacters").addClass("enemyCharacter1").removeClass("yourCharacter1");
// 	$(".jainaContentContainer").addClass("jainaContentContainer2").removeClass("jainaContentContainer");

// 	$(".yourCharacter3").appendTo(".enemiesCharacters").addClass("enemyCharacter3").removeClass("yourCharacter3");
// 	$(".johannaContentContainer").addClass("johannaContentContainer2").removeClass("johannaContentContainer");

// 	$(".yourCharacter4").appendTo(".enemiesCharacters").addClass("enemyCharacter4").removeClass("yourCharacter4");
// 	$(".murkyContentContainer").addClass("murkyContentContainer2").removeClass("murkyContentContainer");

// });

// $(".yourCharacter3").one("click", function(){
// 	$(".yourCharacter1").appendTo(".enemiesCharacters").addClass("enemyCharacter1").removeClass("yourCharacter1");
// 	$(".jainaContentContainer").addClass("jainaContentContainer2").removeClass("jainaContentContainer");

// 	$(".yourCharacter2").appendTo(".enemiesCharacters").addClass("enemyCharacter2").removeClass("yourCharacter2");
// 	$(".azmodanContentContainer").addClass("azmodanContentContainer2").removeClass("azmodanContentContainer");

// 	$(".yourCharacter4").appendTo(".enemiesCharacters").addClass("enemyCharacter4").removeClass("yourCharacter4");
// 	$(".murkyContentContainer").addClass("murkyContentContainer2").removeClass("murkyContentContainer");

// });

// $(".yourCharacter4").one("click", function(){
// 	$(".yourCharacter1").appendTo(".enemiesCharacters").addClass("enemyCharacter1").removeClass("yourCharacter1");
// 	$(".jainaContentContainer").addClass("jainaContentContainer2").removeClass("jainaContentContainer");

// 	$(".yourCharacter2").appendTo(".enemiesCharacters").addClass("enemyCharacter2").removeClass("yourCharacter2");
// 	$(".azmodanContentContainer").addClass("azmodanContentContainer2").removeClass("azmodanContentContainer");

// 	$(".yourCharacter3").appendTo(".enemiesCharacters").addClass("enemyCharacter3").removeClass("yourCharacter3");
// 	$(".johannaContentContainer").addClass("johannaContentContainer2").removeClass("johannaContentContainer");

// });










// $(".enemyCharacter1").one("click", function(){
// 	$(".enemyCharacter1").appendTo(".defenderCharacter1");
// 	// $(".enemyCharacter1").addClass(".defenderCharacter1");
// 	$(".enemyCharacter1").removeClass("enemyCharacter1");
// 	$(".jainaContentContainer2").addClass("jainaContentContainer3");
// 	$(".jainaContentContainer2").removeClass("jainaContentContainer2");	
// });

// $(".enemyCharacter2").one("click", function(){
// 	$(".enemyCharacter2").appendTo(".defenderCharacter1");
// 	// $(".enemyCharacter2").addClass(".defenderCharacter1");
// 	$(".enemyCharacter2").removeClass("enemyCharacter2");
// 	$(".azmodanContentContainer2").addClass("azmodanContentContainer3");
// 	$(".azmodanContentContainer2").removeClass("azmodanContentContainer2");
// });

// $(".enemyCharacter3").one("click", function(){
// 	$(".enemyCharacter3").appendTo(".defenderCharacter1");
// 	// $(".enemyCharacter3").addClass(".defenderCharacter1");
// 	$(".enemyCharacter3").removeClass("enemyCharacter3");
// 	$(".johannaContentContainer2").addClass("johannaContentContainer3");
// 	$(".johannaContentContainer2").removeClass("johannaContentContainer2");
// });

// $(".enemyCharacter4").one("click", function(){
// 	$(".enemyCharacter4").appendTo(".defenderCharacter1");
// 	// $(".enemyCharacter4").addClass(".defenderCharacter1");
// 	$(".enemyCharacter4").removeClass("enemyCharacter4");
// 	$(".murkyContentContainer2").addClass("murkyContentContainer3");
// 	$(".murkyContentContainer2").removeClass("murkyContentContainer2");
// });

