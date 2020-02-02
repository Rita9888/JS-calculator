function Factorial(n){
    //calc.input.value += '!';
    fact = 1;
    if(n == 0)
        return fact = 1;
    else{
        for(i = 1 ; i <= n ; i++){
            fact *= i;
    }
    return fact;
}
}
let position = document.getElementsByName('units')[0];
function Cos(x){
    if(position.value == "рад")
        return Math.cos(x);
    else
        return Math.cos(x/(180/Math.PI));
}

function Cotang(x){
    if(position.value == "рад")
        return 1/Math.tan(x);
    else
        return 1/Math.tan(x/(180/Math.PI));    
}

function Sin(x){
    if(position.value == "рад")
        return Math.sin(x);
    else
        return Math.sin(x/(180/Math.PI));
}

function Tang(x){
    if(position.value == "рад")
        return Math.tan(x);
    else
        return Math.tan(x/(180/Math.PI));
    
}

function Result(){
    let logOperation = calc.input.value;

    if(calc.input.value.match(/!/)){
        operation =  calc.input.value.split('!')[0];
        calc.input.value = Factorial(operation);
    }
    else if(calc.input.value.match(/cos/)){
        operation =  calc.input.value.split('cos')[1];
        calc.input.value = Cos(operation);
    }
    else if(calc.input.value.match(/sin/)){
        operation =  calc.input.value.split('sin')[1];
        calc.input.value = Sin(operation);
    }   
    else if(calc.input.value.match(/tg/)){
        operation =  calc.input.value.split('tg')[1];
        calc.input.value = Tang(operation);
    } 
    else if(calc.input.value.match(/ctg/)){
        operation =  calc.input.value.split('ctg')[1];
        calc.input.value = Cotang(operation);
    }  
    else 
        calc.input.value = eval(calc.input.value);

    logOperation += "=" + calc.input.value + '\n';
AddElementToHistory("arhiv", logOperation);
}

function Units(){
    if (position.value == "град"){ 
        position.value = "рад";
    }
    else 
        position.value = "град";
    
        
}

function history(){

    let arhiv = document.getElementById("arhiv");

    if(arhiv.style.visibility == "visible"){
        arhiv.style.visibility = "hidden";
    }
    else{
        arhiv.style.visibility = "visible";
    }
} 

function AddElementToHistory(IdName, logValue){
    let arhivDiv = document.getElementById(IdName);
    let textToAdded = document.createTextNode(logValue);
    let endLine = document.createElement("br");
    arhivDiv.appendChild(textToAdded);
    arhivDiv.appendChild(endLine);
    
}

let histor = document.getElementsByClassName("history")[0];

histor.addEventListener('click', function() {
    history();   
});  