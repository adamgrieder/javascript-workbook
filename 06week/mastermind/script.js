
//makes a random code with numbers 0-5.//
secretCode = [];
for (i = 0; i < 4; i ++) {
	secretCode.push(Math.floor(Math.random()*6));
}
console.log(secretCode);

//color picker range, uses numbers 0-5 as colors / clicking on color resets border of last picked option
colorCode = ["orange", "red", "green", "blue", "yellow", "purple"];
colorText = ["orange", "red", "green", "blue", "yellow", "purple"];
cPal = document.getElementsByClassName("cPal");
cPalReset = function() {
	for (i = 0; i < cPal.length; i++) {
	}
}
//creates event listeners for each range of colored circle, while resetting the css by adding border and changing Corrcol var//
//changes the id for the colors into number
for (i = 0; i < cPal.length; i ++) {
	cPal[i].addEventListener("click", function() {
		cPalReset();
		currentColor = colorText.indexOf(this.id);
	})
}
currentRow = [0, 0, 0, 0];
//creates event listeners for current row and assigns correct color to a circle peg position//
//switch stamtement used to assign currentColor to peg postion//
nTurns = 0;
circles = document.getElementsByClassName("circle");
assignColor = function() {
	this.style.backgroundColor=colorCode[currentColor];
	switch(this.className) {
		case "circle plm0":
		currentRow[0] = currentColor;
		break;

		case "circle plm1":
		currentRow[1] = currentColor;
		break;

		case "circle plm2":
		currentRow[2] = currentColor;
		break;

		case "circle plm3":
		currentRow[3] = currentColor;
		break;
	}
}
//first row active even before check button is clicked//
activateCurrentRow = function() {
	for (i = 4*nTurns; i < (4*nTurns + 4); i ++) {
		circles[i].addEventListener("click", assignColor);
	}
}
activateCurrentRow();
inactivatePreviousRow = function () {
	for (i = 4*(nTurns-1); i < (4*(nTurns-1) + 4); i ++) {
		circles[i].removeEventListener("click", assignColor);
	}
}
checkButton = document.getElementsByClassName("ckCom")[0];

checkButton.addEventListener("click", function() {
	nTurns ++;
	if (nTurns < 8) {activateCurrentRow()};
	inactivatePreviousRow();
	corrPos();
	corrCol();
	currentRow = [0, 0, 0, 0];
	if (nTurns === 8 && posCounter !== 4) {
		alert("The Game has Ended, Refresh Page to Play Again!");
	}
});

//Check for win//
corrPos = function() {
	posCounter = 0;
	for (i = 0; i < 4; i ++) {
		if(secretCode[i] === currentRow[i]) {
			posCounter ++;
		}
	}
	if (posCounter === 4) {
		alert("You Guessed the Correct Combination!");
	}
	document.getElementsByClassName("corrPos")[nTurns-1].innerHTML = posCounter;
}

//Check if correct color, 1 colors repeated is still 4 right colors.
corrCol = function() {
	colCounter = 0;
	for (i = 0; i < 4; i ++) {
		if(secretCode.indexOf(currentRow[i]) !== -1) {
				colCounter ++;
		}
	}
	document.getElementsByClassName("corrCol")[nTurns-1].innerHTML = colCounter;
}
