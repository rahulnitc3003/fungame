	function PopUp(){
        document.getElementById('ac-wrapper').style.display="none"; 
	}
	pTotal1 = 0;
	pTotal2 = 0;
	ftotal1 = 0;
	ftotal2 = 0;
	function passTurn1() {
		var pass1 = document.getElementById('player1');
		pass1.style.display = "none";
		var pass2 = document.getElementById("player2")
		pass2.style.display = "block";
		//document.getElementById("playerImg1").src="def.gif";
		document.getElementById("playerImg1").style.display="none";
	}
	function passTurn2() {
		var pass2 = document.getElementById('player2');
		pass2.style.display = "none";
		var pass1 = document.getElementById("player1")
		pass1.style.display = "block";
		//document.getElementById("playerImg2").src="def2.gif";
		document.getElementById("playerImg2").style.display="none";
	}

	var randomScore1 = function ()
	{
		var upper = 7;
		var lower = 1;
		var score1 = Math.floor(Math.random() * (upper - lower) + lower);
		if (score1 == 1) {
			document.getElementById("playerImg1").src="dice1.jpg";
			alert("You Got Number 1");
			alert("Sorry!!! You Lossed Current Score");
			pTotal1 = 0;
			passTurn1()
		}
		else{
			pTotal1 += score1;
			if(ftotal1 >= 100){
				alert("Congrats!!! Player1 Winner");
				// pTotal1 = 0;
				// pTotal2 = 0;
				// document.getElementById("ptext1").value = pTotal1;
				// document.getElementById("ptext2").value = pTotal2;
				window.location='index.html';
			}
			else{
				document.getElementById("playerImg1").style.display="block";
				document.getElementById("playerImg1").src="dice" + score1 + ".jpg";
			}
		}
		document.getElementById("ptext1").value = pTotal1;
		//return score1;
	}
	var randomScore2 = function()
	{
		var upper = 7;
		var lower = 1;
		var score2 = Math.floor(Math.random() * (upper - lower) + lower);
		if (score2 == 1) {
			alert("You Got Number 1");
			alert("Sorry!!! You Lossed Current Score");
			pTotal2 = 0;
			passTurn2();
		}
		else{
			pTotal2 += score2;
			if(ftotal2 >= 100){
				alert("Congrats!!! Player2 Winner");
				// pTotal1 = 0;
				// pTotal2 = 0;
				// document.getElementById("ptext1").value = pTotal1;
				// document.getElementById("ptext2").value = pTotal2;
				window.location='index.html';
			}
			else{
				document.getElementById("playerImg2").style.display="block";
				document.getElementById("playerImg2").src="dice" + score2 + ".jpg";
			}
		}
		document.getElementById("ptext2").value = pTotal2;
		//return score2;
	}

	function holdScore1(){
		var current = document.getElementById("ptext1").value;
		ftotal1 += parseInt(current);
		document.getElementById("finaltext1").value = ftotal1;
		if(ftotal1 >= 100){
			alert("Congrats!!! Player1 Winner");
			window.location='index.html';
		}
		else{
			document.getElementById("ptext1").value = 0;
			pTotal1 = 0;	
		}
	}
	function holdScore2(){
		var current = document.getElementById("ptext2").value;
		ftotal2 += parseInt(current);
		document.getElementById("finaltext2").value = ftotal2;
		if(ftotal2 >= 100){
			alert("Congrats!!! Player2 Winner");
			window.location='index.html';
		}
		else{
			document.getElementById("ptext2").value = 0;
			pTotal2 = 0;	
		}
	}