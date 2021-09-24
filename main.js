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

function insert(num)
{	
	document.getElementById("textview").value += num;
}

function che(){
		var res = [];
		var answer;
		
		if(document.getElementById("textview").value.includes("+")){
		res = document.getElementById("textview").value.split('+');
		return parseInt(res[0]) + parseInt(res[1]);
		}
		
		else if(document.getElementById("textview").value.includes("-")){
		res = document.getElementById("textview").value.split('-');
		return parseInt(res[0]) - parseInt(res[1]);
		}
		
		else if(document.getElementById("textview").value.includes("/")){
		res = document.getElementById("textview").value.split('/');
		return parseInt(res[0]) / parseInt(res[1]);
		}
		
		else{
		res = document.getElementById("textview").value.split('*');
		return answer = parseInt(res[0]) * parseInt(res[1]);
		}
}
		
function calc(){	
var a = che()
document.getElementById('textview').value = a; 
}
	
function clean()
	{
		document.getElementById('textview').value=" ";	
	}

function back(){
    temp = document.getElementById("textview").value;
    document.getElementById("textview").value = temp.substring(0, temp.length-1);
}