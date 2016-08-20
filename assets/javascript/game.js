var themeSong = new Audio("assets/sounds/themeSong.mp3");

var jaina = {
	"name": "Jaina",
	"healthPoints": 100,
	"attackPower": 10,
	"basePower": 10,	
	"counterAttackPower": 15
};

var azmodan = {
	"name": "Azmodan",
	"healthPoints": 150,
	"attackPower": 15,
	"basePower": 15,
	"counterAttackPower": 10
};

var johanna = {
	"name": "Johanna",
	"healthPoints": 400,
	"attackPower": 15,
	"basePower": 15,	
	"counterAttackPower": 5
};

var murky = {
	"name": "Murky",
	"healthPoints": 50,
	"attackPower": 25,
	"basePower": 25,	
	"counterAttackPower": 5
};

var jainaStatsUpdate = $(".jaina");
	jainaStatsUpdate.attr("name", jaina.name);
	jainaStatsUpdate.attr("healthPoints", jaina.healthPoints);
	jainaStatsUpdate.attr("attackPower", jaina.attackPower);
	jainaStatsUpdate.attr("basePower", jaina.basePower);
	jainaStatsUpdate.attr("counterAttackPower", jaina.counterAttackPower);

var azmodanStatsUpdate = $(".azmodan");
	azmodanStatsUpdate.attr("name", azmodan.name);
	azmodanStatsUpdate.attr("healthPoints", azmodan.healthPoints);
	azmodanStatsUpdate.attr("attackPower", azmodan.attackPower);
	azmodanStatsUpdate.attr("basePower", azmodan.basePower);
	azmodanStatsUpdate.attr("counterAttackPower", azmodan.counterAttackPower);

var johannaStatsUpdate = $(".johanna");
	johannaStatsUpdate.attr("name", johanna.name);
	johannaStatsUpdate.attr("healthPoints", johanna.healthPoints);
	johannaStatsUpdate.attr("attackPower", johanna.attackPower);
	johannaStatsUpdate.attr("basePower", johanna.basePower);
	johannaStatsUpdate.attr("counterAttackPower", johanna.counterAttackPower);

var murkyStatsUpdate = $(".murky");
	murkyStatsUpdate.attr("name", murky.name);
	murkyStatsUpdate.attr("healthPoints", murky.healthPoints);
	murkyStatsUpdate.attr("attackPower", murky.attackPower);
	murkyStatsUpdate.attr("basePower", murky.basePower);
	murkyStatsUpdate.attr("counterAttackPower", murky.counterAttackPower);

function resetGame(){
	location.reload(true);
}

$(document).ready(function(){

	themeSong.play();

	$(".chosenCharacters").click(function(){
		$(this).removeClass("nonChosenCharacters");
		$(".nonChosenCharacters").removeClass("chosenCharacters")
			.removeClass("nonChosenCharacters")
			.appendTo(".enemiesCharacters")
			.addClass("enemyCharacter");
		$(".chosenCharacters .counterAttackPower").detach();

		$(".defeated").html("You have chosen " + $('.chosenCharacters').attr('name') + " as your character.");

		$(".enemyCharacter .contentContainer").removeClass("contentContainer")
			.addClass("contentContainer2");
		$(".enemyCharacter .attackPower").detach();


	    if ($(".defenderSection").is(":empty") && $(this).hasClass("enemyCharacter")) {
	    	$(this).appendTo(".defenderSection")
	    		.removeClass("enemyCharacter")
	    		.addClass("defenderCharacter");
	    		
			$(".defenderCharacter .contentContainer2").removeClass("contentContainer2")
				.addClass("contentContainer3");

			$(".defeated").html("You have chosen " + $('.defenderCharacter').attr('name') + " to fight.");
			$(".attackDmgInfo").html("");
			$(".defenderDmgInfo").html("");

	    }
	});


	$(".attackButton").on("click", function(){
		if ($(".defenderSection").is(":empty")){

		}else{

			$(".defeated").html("");

			defenderCurrentHealth = parseInt($(".defenderCharacter").attr("healthPoints")) - parseInt($(".chosenCharacters").attr("attackPower"));
			$(".defenderCharacter").attr("healthPoints", defenderCurrentHealth);
			$(".defenderCharacter .healthPoints").html("Current HP: " + defenderCurrentHealth);	


			var attackPowerIncrease = parseInt($(".chosenCharacters").attr('attackPower')) + parseInt($(".chosenCharacters").attr('basePower'));
			$(".chosenCharacters").attr("attackPower", attackPowerIncrease);
			$(".chosenCharacters .attackPower").html("Attack Power: " + attackPowerIncrease);		


			$(".attackDmgInfo").html($('.chosenCharacters').attr('name') + " has done " + attackPowerIncrease + " dmg to " + $('.defenderCharacter').attr('name'));
			$(".defenderDmgInfo").html($('.defenderCharacter').attr('name') + " has done " + $('.defenderCharacter').attr('counterAttackPower') + " dmg to " + $('.chosenCharacters').attr('name'));

			if (defenderCurrentHealth <= 0){
				$(".defeated").html("You have defeated " + $(".defenderCharacter").attr("name"));
				$(".defenderSection").empty();
			}

			if (defenderCurrentHealth > 0){
				var chosenCharacterCurrentHealth = parseInt($(".chosenCharacters").attr("healthPoints")) - parseInt($(".defenderCharacter").attr("counterAttackPower"));
				$(".chosenCharacters").attr("healthPoints", chosenCharacterCurrentHealth);
				$(".chosenCharacters .healthPoints").html("Current HP: " + chosenCharacterCurrentHealth);
			}

			if ($(".chosenCharacters").attr("healthPoints") <= 0){
				$(".defenderText h3").html($(".defenderCharacter").attr("name") + " win!")
				
				$(".fightInfo").html("<p class='defeated'>You have lost to try again.</p>" +
					"<button class='resetButton'>Reset Game</button");
				$(".fightInfo button").on("click", function(){
					resetGame();
				})
				$(".chosenCharacters").empty();		
			}
			
			if ($(".enemiesCharacters").is(":empty") && $(".defenderSection").is(":empty") &&
				$(".chosenCharacters").attr("healthPoints") > 0 && $(".johanna").attr("healthPoints") != 400){
				$(".chosenCharacters").appendTo(".defenderSection");
				$(".defenderText h3").html($(".chosenCharacters").attr("name") + " win!")


				$(".fightInfo").html("<button class='resetButton'>Reset Game</button")
				$(".fightInfo button").on("click", function(){
					resetGame();
				});
			}
		}
	})
});