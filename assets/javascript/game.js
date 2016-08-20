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

var themeSong = new Audio("assets/sounds/themeSong.mp3");
var jainaIntro = new Audio("assets/sounds/Jaina_Attack03.mp3")
var azmodanIntro = new Audio("assets/sounds/Azmodan_AI_Attack01.mp3")
var johannaIntro = new Audio("assets/sounds/Johanna_Attack00.mp3")
var murkyIntro = new Audio("assets/sounds/Murky_AI_Attack01.mp3")
var jainaOutro = new Audio("assets/sounds/Jaina_Death00_05.mp3")
var azmodanOutro = new Audio("assets/sounds/Azmodan_Death00_01.mp3")
var johannaOutro = new Audio("assets/sounds/Johanna_Death00.mp3")
var murkyOutro = new Audio("assets/sounds/Murky_Death01.mp3")

function resetGame(){
	location.reload(true);
}

var introSounds = 0;
var jainaDefenderIntroSounds = 0;
var azmodanDefenderIntroSounds = 0;
var johannaDefenderIntroSounds = 0;
var murkyDefenderIntroSounds = 0;
var jainaDefenderOutroSounds = 0;
var azmodanDefenderOutroSounds = 0;
var johannaDefenderOutroSounds = 0;
var murkyDefenderOutroSounds = 0;
$(document).ready(function(){

	themeSong.play();

	$(".chosenCharacters").click(function(){
		$(this).removeClass("nonChosenCharacters");
		$(".nonChosenCharacters").removeClass("chosenCharacters")
			.removeClass("nonChosenCharacters")
			.appendTo(".enemiesCharacters")
			.addClass("enemyCharacter");

		$(".chosenCharacters .counterAttackPower").detach();

		if($('.chosenCharacters').attr('name') == "Azmodan" && introSounds == 0){
			azmodanIntro.play();
			introSounds++;
		}else if ($('.chosenCharacters').attr('name') == "Jaina" && introSounds == 0){
			jainaIntro.play();
			introSounds++;
		}else if ($('.chosenCharacters').attr('name') == "Johanna" && introSounds == 0){
			johannaIntro.play();
			introSounds++;
		}else if ($('.chosenCharacters').attr('name') == "Murky" && introSounds == 0){
			murkyIntro.play();
			introSounds++;
		}

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

			if($('.defenderCharacter').attr('name') == "Azmodan" && azmodanDefenderIntroSounds == 0){
				azmodanIntro.play();
				azmodanDefenderIntroSounds++;
			}else if ($('.defenderCharacter').attr('name') == "Jaina" && jainaDefenderIntroSounds == 0){
				jainaIntro.play();
				jainaDefenderIntroSounds++;
			}else if ($('.defenderCharacter').attr('name') == "Johanna" && johannaDefenderIntroSounds == 0){
				johannaIntro.play();
				johannaDefenderIntroSounds++;
			}else if ($('.defenderCharacter').attr('name') == "Murky" && murkyDefenderIntroSounds == 0){
				murkyIntro.play();
				murkyDefenderIntroSounds++;
			}		
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
				if($('.defenderCharacter').attr('name') == "Azmodan" && azmodanDefenderOutroSounds == 0){
					azmodanOutro.play();
					azmodanDefenderOutroSounds++;
				}else if ($('.defenderCharacter').attr('name') == "Jaina" && jainaDefenderOutroSounds == 0){
					jainaOutro.play();
					jainaDefenderOutroSounds++;
				}else if ($('.defenderCharacter').attr('name') == "Johanna" && johannaDefenderOutroSounds == 0){
					johannaOutro.play();
					johannaDefenderOutroSounds++;
				}else if ($('.defenderCharacter').attr('name') == "Murky" && murkyDefenderOutroSounds == 0){
					murkyOutro.play();
					murkyDefenderOutroSounds++;
				}	
				$(".defeated").html("You have defeated " + $(".defenderCharacter").attr("name"));
				$(".defenderSection").empty();
			}

			if (defenderCurrentHealth > 0){
				var chosenCharacterCurrentHealth = parseInt($(".chosenCharacters").attr("healthPoints")) - parseInt($(".defenderCharacter").attr("counterAttackPower"));
				$(".chosenCharacters").attr("healthPoints", chosenCharacterCurrentHealth);
				$(".chosenCharacters .healthPoints").html("Current HP: " + chosenCharacterCurrentHealth);
			}

			if ($(".chosenCharacters").attr("healthPoints") <= 0){
				if($('.chosenCharacters').attr('name') == "Azmodan" && azmodanDefenderOutroSounds == 0){
					azmodanOutro.play();
					azmodanDefenderOutroSounds++;
				}else if ($('.chosenCharacters').attr('name') == "Jaina" && jainaDefenderOutroSounds == 0){
					jainaOutro.play();
					jainaDefenderOutroSounds++;
				}else if ($('.chosenCharacters').attr('name') == "Johanna" && johannaDefenderOutroSounds == 0){
					johannaOutro.play();
					johannaDefenderOutroSounds++;
				}else if ($('.chosenCharacters').attr('name') == "Murky" && murkyDefenderOutroSounds == 0){
					murkyOutro.play();
					murkyDefenderOutroSounds++;
				}				
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