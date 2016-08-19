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
	"counterAttackPower": 20
};

var johanna = {
	"name": "Johanna",
	"healthPoints": 200,
	"attackPower": 20,
	"counterAttackPower": 30
};

var murky = {
	"name": "Murky",
	"healthPoints": 120,
	"attackPower": 10,
	"counterAttackPower": 15
};

$(".yourCharacter1").one("click", function(){
	$(".yourCharacter2").appendTo(".enemyCharacter2");
	$(".yourCharacter2").addClass("enemyCharacter2");
	$(".yourCharacter2").removeClass("yourCharacter2");
	$(".azmodanContentContainer").addClass("azmodanContentContainer2");
	$(".azmodanContentContainer").removeClass("azmodanContentContainer");


	$(".yourCharacter3").appendTo(".enemyCharacter3");
	$(".yourCharacter3").addClass("enemyCharacter3");
	$(".yourCharacter3").removeClass("yourCharacter3");
	$(".johannaContentContainer").addClass("johannaContentContainer2");
	$(".johannaContentContainer").removeClass("johannaContentContainer");

	$(".yourCharacter4").appendTo(".enemyCharacter4");
	$(".yourCharacter4").addClass("enemyCharacter4");
	$(".yourCharacter4").removeClass("yourCharacter4");
	$(".murkyContentContainer").addClass("murkyContentContainer2");
	$(".murkyContentContainer").removeClass("murkyContentContainer");
});

$(".yourCharacter2").one("click", function(){
	$(".yourCharacter1").appendTo(".enemyCharacter1");
	$(".yourCharacter1").addClass("enemyCharacter1");
	$(".yourCharacter1").removeClass("yourCharacter1");
	$(".jainaContentContainer").addClass("jainaContentContainer2");
	$(".jainaContentContainer").removeClass("jainaContentContainer");

	$(".yourCharacter3").appendTo(".enemyCharacter3");
	$(".yourCharacter3").addClass("enemyCharacter3");
	$(".yourCharacter3").removeClass("yourCharacter3");
	$(".johannaContentContainer").addClass("johannaContentContainer2");
	$(".johannaContentContainer").removeClass("johannaContentContainer");

	$(".yourCharacter4").appendTo(".enemyCharacter4");
	$(".yourCharacter4").addClass("enemyCharacter4");
	$(".yourCharacter4").removeClass("yourCharacter4");
	$(".murkyContentContainer").addClass("murkyContentContainer2");
	$(".murkyContentContainer").removeClass("murkyContentContainer");
});

$(".yourCharacter3").one("click", function(){
	$(".yourCharacter1").appendTo(".enemyCharacter1");
	$(".yourCharacter1").addClass("enemyCharacter1");
	$(".yourCharacter1").removeClass("yourCharacter1");
	$(".jainaContentContainer").addClass("jainaContentContainer2");
	$(".jainaContentContainer").removeClass("jainaContentContainer");

	$(".yourCharacter2").appendTo(".enemyCharacter2");
	$(".yourCharacter2").addClass("enemyCharacter2");
	$(".yourCharacter2").removeClass("yourCharacter2");
	$(".azmodanContentContainer").addClass("azmodanContentContainer2");
	$(".azmodanContentContainer").removeClass("azmodanContentContainer");

	$(".yourCharacter4").appendTo(".enemyCharacter4");
	$(".yourCharacter4").addClass("enemyCharacter4");
	$(".yourCharacter4").removeClass("yourCharacter4");
	$(".murkyContentContainer").addClass("murkyContentContainer2");
	$(".murkyContentContainer").removeClass("murkyContentContainer");
});

$(".yourCharacter4").one("click", function(){
	$(".yourCharacter1").appendTo(".enemyCharacter1");
	$(".yourCharacter1").addClass("enemyCharacter1");
	$(".yourCharacter1").removeClass("yourCharacter1");
	$(".jainaContentContainer").addClass("jainaContentContainer2");
	$(".jainaContentContainer").removeClass("jainaContentContainer");

	$(".yourCharacter2").appendTo(".enemyCharacter2");
	$(".yourCharacter2").addClass("enemyCharacter2");
	$(".yourCharacter2").removeClass("yourCharacter2");
	$(".azmodanContentContainer").addClass("azmodanContentContainer2");
	$(".azmodanContentContainer").removeClass("azmodanContentContainer");

	$(".yourCharacter3").appendTo(".enemyCharacter3");
	$(".yourCharacter3").addClass("enemyCharacter3");
	$(".yourCharacter3").removeClass("yourCharacter3");
	$(".johannaContentContainer").addClass("johannaContentContainer2");
	$(".johannaContentContainer").removeClass("johannaContentContainer");
});










$(".enemyCharacter1").one("click", function(){
	$(".enemyCharacter1").appendTo(".defenderCharacter1");
	// $(".enemyCharacter1").addClass(".defenderCharacter1");
	$(".enemyCharacter1").removeClass("enemyCharacter1");
	$(".jainaContentContainer2").addClass("jainaContentContainer3");
	$(".jainaContentContainer2").removeClass("jainaContentContainer2");	
});

$(".enemyCharacter2").one("click", function(){
	$(".enemyCharacter2").appendTo(".defenderCharacter1");
	// $(".enemyCharacter2").addClass(".defenderCharacter1");
	$(".enemyCharacter2").removeClass("enemyCharacter2");
	$(".azmodanContentContainer2").addClass("azmodanContentContainer3");
	$(".azmodanContentContainer2").removeClass("azmodanContentContainer2");
});

$(".enemyCharacter3").one("click", function(){
	$(".enemyCharacter3").appendTo(".defenderCharacter1");
	// $(".enemyCharacter3").addClass(".defenderCharacter1");
	$(".enemyCharacter3").removeClass("enemyCharacter3");
	$(".johannaContentContainer2").addClass("johannaContentContainer3");
	$(".johannaContentContainer2").removeClass("johannaContentContainer2");
});

$(".enemyCharacter4").one("click", function(){
	$(".enemyCharacter4").appendTo(".defenderCharacter1");
	// $(".enemyCharacter4").addClass(".defenderCharacter1");
	$(".enemyCharacter4").removeClass("enemyCharacter4");
	$(".murkyContentContainer2").addClass("murkyContentContainer3");
	$(".murkyContentContainer2").removeClass("murkyContentContainer2");
});


















// Create header
// var starwarsHeader = $("<h1>");
// starwarsHeader.html("Star Wars RPG!");
// $("#header").append(starwarsHeader);
// starwarsHeader.attr("id", "headerAdjustments");


// Your Character Text
// var yourCharText = $("<h3>");
// yourCharText.html("Your Character");
// $("#characterText").append(yourCharText);
// yourCharText.attr("id", "yourCharText");


// Enemies Avaiable to attack text
// var enemiesCharText = $("<h3>");
// enemiesCharText.html("Enemies Avaiable To Attack");
// $("#enemiesText").append(enemiesCharText);
// enemiesCharText.attr("id", "enemiesCharText");


// Fight Text
// var fightCharText = $("<h3>");
// fightCharText.html("Fight Section");
// $("#fightText").append(fightCharText);
// fightCharText.attr("id", "fightCharText");


// Yoda Changes
// var yodaImgContainer = $("<div>");
// $("#yoda").append(yodaImgContainer);
// yodaImgContainer.attr("id", "yodaImgContainer");

// var yodaName = $("<p>");
// yodaName.html(yoda.name);
// $("#yodaImgContainer").append(yodaName);
// yodaName.attr("id", "yodaName");

// var yodaImg = $("<img>");
// $("#yodaImgContainer").append(yodaImg);
// yodaImg.attr("src", "assets/images/1-yoda.jpg");
// yodaImg.attr("id", "yodaImg");

// var yodaStats = $("<p>");
// yodaStats.html("<p>Current HP: " + yoda.healthPoints + "</p>" +
// 	"<p>Attack Power: " + yoda.attackPower + "</p>" +
// 	"<p>Counter Attack Power: " + yoda.counterAttackPower + "</p>");
// $("#yodaImgContainer").append(yodaStats);
// yodaStats.attr("id", "yodaStats");


// Darth Vader Changes
// var darthVaderImgContainer = $("<div>");
// $("#darth-vader").append(darthVaderImgContainer);
// darthVaderImgContainer.attr("id", "darthVaderImgContainer");

// var darthVaderName = $("<p>");
// darthVaderName.html(darthVader.name)
// $("#darthVaderImgContainer").append(darthVaderName);
// darthVaderName.attr("id", "darthVaderName");

// var darthVaderImg = $("<img>");
// $("#darthVaderImgContainer").append(darthVaderImg);
// darthVaderImg.attr("src", "assets/images/2-darth-vader.jpg");
// darthVaderImg.attr("id", "darthVaderImg");

// var darthVaderStats = $("<p>");
// darthVaderStats.html("<p>Current HP: " + darthVader.healthPoints + "</p>" +
// 	"<p>Attack Power: " + darthVader.attackPower + "</p>" +
// 	"<p>Counter Attack Power: " + darthVader.counterAttackPower + "</p>");
// $("#darthVaderImgContainer").append(darthVaderStats);
// darthVaderStats.attr("id", "darthVaderStats");


// Grievous Changes
// var grievousImgContainer = $("<div>");
// $("#grievous").append(grievousImgContainer);
// grievousImgContainer.attr("id", "grievousImgContainer");

// var grievousName = $("<p>");
// grievousName.html(grievous.name)
// $("#grievousImgContainer").append(grievousName);
// grievousName.attr("id", "grievousName");

// var grievousImg = $("<img>");
// $("#grievousImgContainer").append(grievousImg);
// grievousImg.attr("src", "assets/images/3-grievous.jpg");
// grievousImg.attr("id", "grievousImg");

// var grievousStats = $("<p>");
// grievousStats.html("<p>Current HP: " + grievous.healthPoints + "</p>" +
// 	"<p>Attack Power: " + grievous.attackPower + "</p>" +
// 	"<p>Counter Attack Power: " + grievous.counterAttackPower + "</p>");
// $("#grievousImgContainer").append(grievousStats);
// grievousStats.attr("id", "grievousStats");


// Count Dooku Changes
// var countDookuImgContainer = $("<div>");
// $("#count-dooku").append(countDookuImgContainer);
// countDookuImgContainer.attr("id", "countDookuImgContainer");

// var countDookuName = $("<p>");
// countDookuName.html(countDooku.name)
// $("#countDookuImgContainer").append(countDookuName);
// countDookuName.attr("id", "countDookuName");

// var countDookuImg = $("<img>");
// $("#countDookuImgContainer").append(countDookuImg);
// countDookuImg.attr("src", "assets/images/4-count-dooku.jpg");
// countDookuImg.attr("id", "countDookuImg");

// var countDookuStats = $("<p>");
// countDookuStats.html("<p>Current HP: " + countDooku.healthPoints + "</p>" +
// 	"<p>Attack Power: " + countDooku.attackPower + "</p>" +
// 	"<p>Counter Attack Power: " + countDooku.counterAttackPower + "</p>");
// $("#countDookuImgContainer").append(countDookuStats);
// countDookuStats.attr("id", "countDookuStats");

// console.log(darkVader.counterAttackPower);
