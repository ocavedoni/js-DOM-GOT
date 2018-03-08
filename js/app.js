/*Use the following data below to create cards for each Game of Thrones house (and if you aren't watching GOT, then you are missing out on half of life!) that will display in the browswer. Each card should have the following information:

image of the crest
House: House of Arryn
Region: The Vale of Arryn
Lord: Robin Arryn
Allegiance: House Stark

Please also use CSS to style up your work 

*/


var kingdoms = [
	{ crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153", house: "House Arryn",region: "The Vale of Arryn",lord: "Robin Arryn", allegiance: "House Stark", words:'"As High as Honor"'},

	{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255", house: "House Frey",region: "The Riverlands",lord: "Unknown", allegiance: "House Lanister", words:'"We Stand Together"'},

	{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836", house: "House Greyjoy",region: "Iron Islands",lord: "King Euron Greyjoy", allegiance: "Sovereign", words:'"We Do Not Sow"'},

	{ crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png", house: "House Lannister",region: "The Crownlands",lord: "Queen Cersei", allegiance: "House Lannister", words:'"Hear Me Roar"'},

	{ crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142", house: "House Stark",region: "The North",lord: "King Jon Snow", allegiance: "Sovereign", words:'"Winter is Coming"'},

	{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", house: "House Targaryen",region: "Dragonstone",lord: "Queen Daenerys", allegiance: "Sovereign", words:'"Fire and Blood"'},

	{ crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest?cb=20170519002924", house: "House Baratheon",region: "The Stormlands",lord: "Renly Baratheon", allegiance: "Sovereign", words:'"Ours is the Fury"'},

	{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/d/dd/House-Bolton-Main-Shield.PNG/revision/latest?cb=20161231131431", house: "House Bolton", region: "The North",lord: "Ramsay Bolton", allegiance: "House Baratheon", words:'"Our Blades Are Sharp"'},

	{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/8/8d/House-Clegane-Main-Shield.PNG/revision/latest?cb=20161231141241", house: "House Clegane",region: "The Westerlands",lord: "Sandor Clegane", allegiance: "House Lannister", words:'"Three dogs on a Yellow Field"'},

	{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/5/5c/House-Karstark-Main-Shield.PNG/revision/latest?cb=20170523023312", house: "House Karstark",region: "The North", lord: "Alys Karstark", allegiance: "House Stark", words:'"The Sun of Winterfell"'},

	{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/7/7e/House-Martell-Main-Shield.PNG/revision/latest?cb=20170523024859", house: "House Martell", region: "Dorne",lord: "Ellaria Sand", allegiance: "House Targaryen", words:'"Unbowed, Unbent, Unbroken"'},

	{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/0/03/House-Mormont-Main-Shield.PNG/revision/latest?cb=20161231120854", house: "House Mormont",region: "The North",lord: "Lady Lyanna Mormont", allegiance: "House Stark", words:'"Here We Stand"'},

	{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/2/2d/House-Tarly-Main-Shield.PNG/revision/latest?cb=20170809082143", house: "House Tarly",region: "The Reach",lord: "Talla Tarly", allegiance: "House Lannister", words:'"First in Battle"'},

	{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/b/bd/House-Tully-Main-Shield.PNG/revision/latest?cb=20170523040648", house: "House Tully",region: "The Riverrun", lord: "Lord Edmure Tully", allegiance: "House Frey", words:'"Family, Duty, Honor"'},

	{crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest?cb=20170108163035", house: "House Tyrell",region: "The Reach",lord: "Lady Olenna", allegiance: "House Targaryen", words:'"Growing Strong"'},

	{crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/89/House-Gardener-Main-Shield.PNG/revision/latest?cb=20170523014916", house: "House Gardner",region: "The Reach",lord: "Garth Greenhand", allegiance: "Soverign", words:'"A green hand on a white field"'},

	{crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/2/29/House-Hoare-Main-Shield.PNG/revision/latest?cb=20161202182224", house: "House Hoare",region: "Iron Islands",lord: "Extinct", allegiance: "Sovereign", words:'"NA"'},

	{crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/1/11/House-Mudd-Shield.PNG/revision/latest?cb=20170523025935", house: "House Mudd",region: "The Riverlands",lord: "Extinct", allegiance: "Sovereign", words:'"Golden crown studded with emeralds"'},

	{crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/3/33/House-Tarth-Main-Shield.PNG/revision/latest?cb=20170724014934", house: "House Tarth",region: "The Stormlands",lord: "Selwyn Tarth", allegiance: "Uncertain", words:'"Yellow suns on rose"'},

	{crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/2/2f/House-Umber-Main-Shield.PNG/revision/latest?cb=20161231125826", house: "House Umber",region: "The North",lord: "Ned Umber", allegiance: "House Stark", words:'"Four silver chains"'}
];


for(i=0; i<kingdoms.length; i++){

	
	var card = document.createElement("div");
	card.className = "card";
	main.appendChild(card);

	var crest = document.createElement("img");
	crest.className = "crest";
	crest.src = kingdoms[i].crest;
	card.appendChild(crest);

	var house = document.createElement("div");
	house.className = "house";
	house.innerHTML = kingdoms[i].house;
	card.appendChild(house);

	var region = document.createElement("div");
	region.className = "region";
	region.innerHTML = kingdoms[i].region;
	card.appendChild(region);

	var lord = document.createElement("div");
	lord.className = "lord";
	lord.innerHTML = kingdoms[i].lord;
	card.appendChild(lord);

	var allegiance = document.createElement("div");
	allegiance.className = "allegiance";
	allegiance.innerHTML = kingdoms[i].allegiance;
	card.appendChild(allegiance);

	var words = document.createElement("div");
	words.className = "words";
	words.innerHTML = kingdoms[i].words;
	words.style.display = "none";
	card.appendChild(words);
}

var showCard = document.getElementsByClassName("card");

for(var i=0; i<showCard.length; i++){
	showCard[i].addEventListener("click", toggle);
}

function toggle(){
	var showHide = this.querySelectorAll(".words")[0];
	if(showHide.style.display === "none"){
		showHide.style.display = "block";
	}else{
		showHide.style.display = "none";

}}








