
let namesArray = [];


let winnerArray =[];
//There is an issue with the placement function. The for loop runs 5 times but the array length is always shorter than what it is supposed to be

function enterNameButton() {
	
	//take value from text box and put into array (list of names)
	const nameInput = document.getElementById("textInput").value;
	//console.log(nameInput);
	namesArray.push(nameInput);
	//console.log(namesArray);

	//takes value from textBox and puts into array that we can see

	document.getElementById('textInput').value = "";
	
	document.getElementById('listOfNames').innerHTML = namesArray;
}


function drawName() {
	//pick a random name from the array
	const randomName = (Math.floor (Math.random() * namesArray.length));
	//console.log(randomName); // index of winner

	const winnerName = namesArray[randomName];
	//console.log(winnerName); //takes the randomNumber and turns into a name from namesArray
	

	//take the index of the winner and remove it from namesArray
	//console.log(randomName);
	namesArray.splice(randomName, 1);

	//make winners go to their own array
	winnerArray.push(winnerName);

	//namesArray.length == 0 && 
	// && document.getElementById('listOfNames').innerHTML == ""

	if(namesArray.length == 0) {
		document.getElementById('winner').innerHTML = "Placements are shown above";
	}


	if(namesArray.length == 0 && document.getElementById('winner').innerHTML == "Placements are shown above") {
		placement();
		document.getElementById('winner').innerHTML = "Name of Winner";
		document.getElementById('listOfNames').innerHTML = "";
		
	} else {

		document.getElementById('listOfNames').innerHTML = namesArray;
		document.getElementById('winner').innerHTML = winnerName;
	}

	


	console.log("Names array length = " + namesArray.length);
	console.log(document.getElementById('listOfNames').innerHTML);
	console.log("Winner Array " + winnerArray);
	console.log("Names Array " + namesArray);
}

//add reset function that clears all values entered

function reset() {
	location.reload();
}


function placement() {

	document.getElementById('drawNameButton').style.opacity = 0.3;
	document.getElementById('drawNameButton').onclick = "";

	let placements;
	let k = 1;
	for (i = 0; i < winnerArray.length; i++) {

		switch(k){
			case 1:
				placements = "1st";
				break;

			case 2:
				placements = ", 2nd";
				break;

			case 3:
				placements = ", 3rd";
				break;
			default:
				placements = ", " + k + "th";
		}

		document.getElementById('showPlacement').innerHTML += (placements + ": " + winnerArray[i]);
		k++;
	}

}