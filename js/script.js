{
		let computerWin = 0,
			playerWin =0; 
			
		const rock = document.getElementById('rock'),
				paper = document.getElementById('paper'),
				shears = document.getElementById('shears');				
				
		
	function playGame(arg){
		
		clearMessages();
		
		let playerInput = arg;
		console.log('Gracz wpisał: ' + playerInput);
		let playerMove = getMoveName(playerInput);
		printMessage('Ruch gracza to: ' + playerMove);
		
		let randomNumber = Math.floor(Math.random() * 3 + 1);
		console.log('Komputer wylosował: ' + randomNumber);
		let computerMove = getMoveName(randomNumber);
		printMessage('Ruch komputera to: ' + computerMove);
		
		function getMoveName(idMove){
			
			console.log('Wywołanie funkcji z argumentem: ' + idMove);
			
			const NAME_ROCK = 'kamień',
					NAME_PAPER = 'papier',
					NAME_SHEARS = 'nożyce';					
			
			if(idMove == 1) {
				console.log('Zwracana wartość: kamień');
				return NAME_ROCK;
			}
			else if(idMove == 2) {
				console.log('Zwracana wartość: papier');
				return NAME_PAPER;
			}
			else if(idMove == 3) {
				console.log('Zwracana wartość: nożyce');
				return NAME_SHEARS;
			}
			else {
				console.log('Zwracana wartość: nieznany ruch');
				return;
			}
		}

		function displayResult(argComputerMove, argPlayerMove){
			
			console.log('Wywołanie funkcji z argumantami: ' + argComputerMove + ', ' + argPlayerMove);
			
			if (argPlayerMove!== undefined){
			
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

		return displayResult(computerMove, playerMove);
			
	}
	
	function counter(result){
		
		clearResult();
		
		if (result !== undefined){
			if(result) playerWin++;
			else computerWin++;
		}
		printResult('Punkty komputera: ' + computerWin + '    Punkty gracza: ' + playerWin);
	}

	rock.addEventListener('click', function(){
		counter(playGame(1));
	});
	paper.addEventListener('click', function(){
		counter(playGame(2));
	});
	shears.addEventListener('click', function(){
		counter(playGame(3));
	});

}