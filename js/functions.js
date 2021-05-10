function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function printResult(arg){
	let div = document.createElement('div');
	div.innerHTML = arg;
	document.getElementById('result').appendChild(div);
}
function clearResult(){
	document.getElementById('result').innerHTML = '';
}

function printPlayerMove(){
	let i = document.createElement('i');
	document.getElementById('player_move').appendChild(i);
}