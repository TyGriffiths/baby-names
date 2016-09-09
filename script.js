var boyNames = ["Tyresius", "Thaddeus", "Flynn", "Atreyu", "Tabias", "Omega", "Mahonri", "Cob", "Helorum", "Jangus", "Xerxes", "Blair", "Zander", "Tucker", "Solomon", "Atticus", "August", "Mont", "Zion", "Lincoln", "Carter"];
var girlNames = ["Kalela", "Tylee", "Tyanna", "Skylie", "Lulu", "Tesia", "Eva", "Zion", "Adeline"];

function nameButton () {
	var lastName = document.getElementById("surname").value;
	if (document.getElementById("male").checked) {
	var boy1 = boyNames[Math.floor(Math.random()*boyNames.length)];
	var boy2 = boyNames[Math.floor(Math.random()*boyNames.length)];
	document.getElementById("generate-name").innerHTML = boy1 + " " + boy2 + " " + lastName;
	}
	else if (document.getElementById("female").checked) {
	var girl1 = girlNames[Math.floor(Math.random()*girlNames.length)];
	var girl2 = girlNames[Math.floor(Math.random()*girlNames.length)];
	document.getElementById("generate-name").innerHTML = girl1 + " " + girl2 + " " + lastName;
	}
	else if (lastName == "") {
		alert("Please input a last name. Or else.");
	}
	else {
		alert("Please select either Male or Female.");
	}
}

document.getElementById("male").addEventListener("click", boyColor);
function boyColor() {
	document.body.style.backgroundColor = "#89cff0";
}
document.getElementById("female").addEventListener("click", girlColor);
function girlColor() {
	document.body.style.backgroundColor = "#ffb6c1";
}