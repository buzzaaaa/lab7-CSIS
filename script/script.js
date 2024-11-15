function addValue(){
    // get the operands value
    inputA = document.getElementById("input_a").value
    inputB = document.getElementById("input_b").value
    // parse to integer. You can use: parseInt(input, 10);
    inputAint = parseInt(inputA, 10); //10 is a base
    inputBint = parseInt(inputB, 10);
    // perform operation
    if (isNaN(inputAint) || isNaN(inputBint)) { //isNaN is not a number
        alert("Please enter valid numbers.");
        return;
    }
    sum = inputAint + inputBint;
    // creating the text output
    text = inputAint + " + " + inputBint + " = " + sum; 
    // (if you want to check) print out in console

    // change the text area

    document.mycalculator.output.value = text;
}


function mulValue(){
    // get the operands value
    inputA = document.getElementById("input_a").value
    inputB = document.getElementById("input_b").value
    // parse to integer. You can use: parseInt(input, 10);
    inputAint = parseInt(inputA, 10); //10 is a base
    inputBint = parseInt(inputB, 10);
    // perform operation
    if (isNaN(inputAint) || isNaN(inputBint)) { //isNaN is not a number
        alert("Please enter valid numbers.");
        return;
    }
    multi = inputAint * inputBint;
    // creating the text output
    text = inputAint + " * " + inputBint + " = " + multi; 
    // (if you want to check) print out in console

    // change the text area

    document.mycalculator.output.value = text;
}

function divValue(){
        // get the operands value
        inputA = document.getElementById("input_a").value
        inputB = document.getElementById("input_b").value
        // parse to integer. You can use: parseInt(input, 10);
        inputAint = parseInt(inputA, 10); //10 is a base
        inputBint = parseInt(inputB, 10);
        // perform operation
        if (isNaN(inputAint) || isNaN(inputBint)) { //isNaN is not a number
            alert("Please enter valid numbers.");
            return;
        }
        divide = inputAint / inputBint;
        // creating the text output
        text = inputAint + " / " + inputBint + " = " + divide; 
        // (if you want to check) print out in console
    
        // change the text area
    
        document.mycalculator.output.value = text;
}
