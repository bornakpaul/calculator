// function insert(num){
//     document.getElementById("textview").value = document.getElementById("textview").value + num;
// }

// function clean(){
//     document.getElementById("textview").value="";
// }

// function calc(){
//     temp = document.getElementById("textview").value;
//     result = eval(temp);
//     document.getElementById("textview").value=result;
// }

// function back(){
//     temp = document.getElementById("textview").value;
//     document.getElementById("textview").value = temp.substring(0, temp.length-1);
// }



document.getElementById("buttonEqual").addEventListener("click", calc);
document.getElementById("buttonzero").addEventListener("click", zero);
document.getElementById("button1").addEventListener("click", one);
document.getElementById("button2").addEventListener("click", two);
document.getElementById("button3").addEventListener("click", three);
document.getElementById("button4").addEventListener("click", four);
document.getElementById("button5").addEventListener("click", five);
document.getElementById("button6").addEventListener("click", six);
document.getElementById("button7").addEventListener("click", seven);
document.getElementById("button8").addEventListener("click", eight);
document.getElementById("button9").addEventListener("click", nine);
document.getElementById("buttonDot").addEventListener("click", dot);
document.getElementById("buttonsub").addEventListener("click", minus);
document.getElementById("buttonadd").addEventListener("click", plus);
document.getElementById("buttonmul").addEventListener("click", mul);
document.getElementById("buttondiv").addEventListener("click", div);
document.getElementById("buttonBack").addEventListener("click", back);
document.getElementById("buttonClean").addEventListener("click", clean);

function zero(){
	document.getElementById("buttonzero").onclick = insert(0);
}
function one(){
	document.getElementById("button1").onclick = insert(1);
}
function two(){
	document.getElementById("button2").onclick = insert(2);
}
function three(){
	document.getElementById("button3").onclick = insert(3);
}
function four(){
	document.getElementById("button4").onclick = insert(4);
}
function five(){
	document.getElementById("button5").onclick = insert(5);
}
function six(){
	document.getElementById("button6").onclick = insert(6);
}
function seven(){
	document.getElementById("button7").onclick = insert(7);
}
function eight(){
	document.getElementById("button8").onclick = insert(8);
}
function nine(){
	document.getElementById("button9").onclick = insert(9);
}
function dot(){
	document.getElementById("buttonDot").onclick = insert('.');
}
function minus(){
	document.getElementById("buttonzero").onclick = insert('-');
}
function plus(){
	document.getElementById("buttonzero").onclick = insert('+');
}
function mul(){
	document.getElementById("buttonzero").onclick = insert('*');
}
function div(){
	document.getElementById("buttonzero").onclick = insert('/');
}


function insert(num)
{	
	document.getElementById("textview").value += num;
}

function calculation(){
		var res = [];
		var answer;
		
		if(document.getElementById("textview").value.includes("+")){
		res = document.getElementById("textview").value.split('+');
		return parseFloat(res[0]) + parseFloat(res[1]);
		}
		
		else if(document.getElementById("textview").value.includes("-")){
		res = document.getElementById("textview").value.split('-');
		return parseFloat(res[0]) - parseFloat(res[1]);
		}
		
		else if(document.getElementById("textview").value.includes("/")){
		res = document.getElementById("textview").value.split('/');
		return parseFloat(res[0]) / parseFloat(res[1]);
		}
		
		else{
		res = document.getElementById("textview").value.split('*');
		return answer = parseFloat(res[0]) * parseFloat(res[1]);
		}
}
		
function calc(){
var ans = calculation()
document.getElementById('textview').value = ans;
}
	
function clean()
	{
		document.getElementById('textview').value=" ";	
	}

function back(){
    temp = document.getElementById("textview").value;
    document.getElementById("textview").value = temp.substring(0, temp.length-1);
}