let computerWin = 0;
let playerWin =0;
let result; 

function playGame(arg){
	
	clearMessages();
	
	let playerInput = arg;
	
	function getMoveName(idMove){
		
		console.log('Wywołanie funkcji z argumentem: ' + idMove);
		
		if(idMove == 1) {
			console.log('Zwracana wartość: kamień');
			return 'kamień';
		}
		else if(idMove == 2) {
			console.log('Zwracana wartość: papier');
			return 'papier';
		}
		else if(idMove == 3) {
			console.log('Zwracana wartość: nożyce');
			return 'nożyce';
		}
		else {
			console.log('Zwracana wartość: nieznany ruch');
			return 'nieznany ruch';
		}
	}

	function displayResult(argComputerMove, argPlayerMove){
		
		console.log('Wywołanie funkcji z argumantami: ' + argComputerMove + ', ' + argPlayerMove);
		
		if (argPlayerMove!='nieznany ruch'){
		
			if(argComputerMove == argPlayerMove){
				printMessage('Remis!'); 
				return;
			} else if( (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')){
				printMessage('Wygrywa komputer!'); 
				return false;
			} else if((argPlayerMove == 'papier' && argComputerMove == 'kamień') || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') || (argPlayerMove == 'nożyce' && argComputerMove == 'papier')){
				printMessage('Wygrywasz!'); 
				return true;
			}

		} else {
			console.log('Ruch > 3 lub ruch < 1!');
			printMessage('Nieznany ruch gracza!');
			return;
		}
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowany ruch: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);

	printMessage('Ruch komputera to: ' + computerMove);


	/*let playerInput = prompt('Wybierz swój ruch! 1 - kamień, 2 - papier, 3 - nożyce.');*/

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	printMessage('Ruch gracza to: ' + playerMove);


	return displayResult(computerMove, playerMove);
		
}

document.getElementById('rock').addEventListener('click', function(){
	counter(playGame(1));
});
document.getElementById('paper').addEventListener('click', function(){
	counter(playGame(2));
});
document.getElementById('shears').addEventListener('click', function(){
	counter(playGame(3));
});

function counter(result){
	
	clearResult();
	
	if (result !== undefined){
		if(result) playerWin++;
		else computerWin++;
	}
	printResult('Punkty komputera: ' + computerWin + '    Punkty gracza: ' + playerWin);
}