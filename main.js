function insert(num){
    document.getElementById("textview").value = document.getElementById("textview").value + num;
}

function clean(){
    document.getElementById("textview").value="";
}

function calc(){
    temp = document.getElementById("textview").value;
    result = eval(temp);
    document.getElementById("textview").value=result;
}

function back(){
    temp = document.getElementById("textview").value;
    document.getElementById("textview").value= temp.substring(0, temp.length-1);
}