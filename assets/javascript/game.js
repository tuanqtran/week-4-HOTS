var yoda = {
	"name": "Yoda",
	"healthPoints": 100,
	"attackPower": 10,
	"counterAttackPower": 15
};

var darkVader = {
	"name": "Dark Vader",
	"healthPoints": 150,
	"attackPower": 15,
	"counterAttackPower": 20
};

var grievous = {
	"name": "Grievous",
	"healthPoints": 200,
	"attackPower": 20,
	"counterAttackPower": 30
};

var countDooku = {
	"name": "Count Dooku",
	"healthPoints": 120,
	"attackPower": 10,
	"counterAttackPower": 15
};


// Create header
var starwarsHeader = $("<h1>");
starwarsHeader.html("Star Wars RPG!");
$("#header").append(starwarsHeader);
starwarsHeader.attr("id", "headerAdjustments");

// Create yoda image
var yodaImgContainer = $("<div>");
$("#yoda").append(yodaImgContainer);
yodaImgContainer.attr("id", "yodaImgContainer");

yoda = $("<p>");
yoda.html(yoda.name);
$("#yodaImgContainer").append(yoda);
yoda.attr("id", "yodaName");

var yodaImg = $("<img>");
$("#yodaImgContainer").append(yodaImg);
yodaImg.attr("src", "assets/images/1-yoda.jpg");
yodaImg.attr("id", "yodaImg");

var darthVaderImgContainer = $("<div>");
$("#dark-vader").append(darthVaderImgContainer);
darthVaderImgContainer.attr("id", "darthVaderImgContainer");

var darthVaderName = $("<p>");
darthVaderName.html("Darth Vader")
$("#darthVaderImgContainer").append(darthVaderName);
darthVaderName.attr("id", "darkVaderName");

var darthVaderImg = $("<img>");
$("#darthVaderImgContainer").append(darthVaderImg);
darthVaderImg.attr("src", "assets/images/2-darth-vader.jpg");
darthVaderImg.attr("id", "darthVaderImg");

var grievousImgContainer = $("<div>");
$("#grievous").append(grievousImgContainer);
grievousImgContainer.attr("id", "grievousImgContainer");

var grievousName = $("<p>");
grievousName.html("Grievous")
$("#grievousImgContainer").append(grievousName);
grievousName.attr("id", "grievousName");

var grievousImg = $("<img>");
$("#grievousImgContainer").append(grievousImg);
grievousImg.attr("src", "assets/images/3-grievous.jpg");
grievousImg.attr("id", "grievousImg");

var countDookuImgContainer = $("<div>");
$("#count-dooku").append(countDookuImgContainer);
countDookuImgContainer.attr("id", "countDookuImgContainer");

var countDookuName = $("<p>");
countDookuName.html("Grievous")
$("#countDookuImgContainer").append(countDookuName);
countDookuName.attr("id", "countDookuName");

var countDookuImg = $("<img>");
$("#countDookuImgContainer").append(countDookuImg);
countDookuImg.attr("src", "assets/images/4-count-dooku.jpg");
countDookuImg.attr("id", "countDookuImg");



// console.log(darkVader.counterAttackPower);
