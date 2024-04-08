function submitted(){
    alert("Form submitted successfully");
}

function displayDate(){
    document.getElementById("showdate").innerHTML = Date();
}

function hideDate(){
    document.getElementById("showdate").innerHTML = " ";
}

function EnteredText(){
    let text = document.getElementById("Name").value;
    document.getElementById("printText").innerHTML = "Name: " + text;
    let text1 = document.getElementById("email").value;
    document.getElementById("printText1").innerHTML = "Email: " + text1;
}

function myFunction(x){
    x.style.background = "yellow" ;
}

function myFunction1(x){
    x.style.background = "white" ;
}


