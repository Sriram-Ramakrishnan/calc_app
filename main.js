let answer = document.getElementById("answer");
inputs = document.querySelectorAll(".buttons input");

let screenvalue = '';

inputs.forEach(inp => {
    inp.addEventListener("click", (e) => {
        text =e.target.value;

    if(text == "AC"){
            screenvalue = '';
            answer.value = screenvalue;
    }
    else if(text == "="){
            answer.value = eval(screenvalue);
            screenvalue = answer.value; // To work with the number instead of the expression
    }
    else if(text == "DEL"){
            answer.value = answer.value.substr(0, answer.value.length - 1);
            screenvalue = answer.value;
    }
    else{
        if (text == "^"){
            screenvalue+="**";}
        else if (text == "π"){
            screenvalue+="3.14";
        }
        else if (text == "e"){
            screenvalue+="2.718"
        }
        else{
            screenvalue += text;}
        answer.value = screenvalue;
        }
        
    })
});
