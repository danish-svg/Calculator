var calculation = document.getElementById('calculation');

function cleared() {
    if (calculation.value) {
        calculation.value = null;
    }else{
        document.getElementById('history-h').innerHTML = 'Nothing to clear.';
    }
}


function seven() {
    calculation.value += 7;
}

function eight() {
    calculation.value += 8;
}

function nine() {
    calculation.value += 9;
}


function four() {
    calculation.value += 4;
}

function five() {
    calculation.value += 5;
}

function six() {
    calculation.value += 6;
}

function one() {
    calculation.value += 1;
}

function two() {
    calculation.value += 2;
}

function three() {
    calculation.value += 3;
}

function zero() {
    calculation.value += 0;
}

//Operators
function multiply() {
    calculation.value += '*';
}

function add() {
    calculation.value += '+';
}

function sub() {
    calculation.value += '-';
}

function decimal() {
    calculation.value += '.';
}

function divide() {
    calculation.value += '/';
}

function power() {
    calculation.value += '**';
}

function equals() {
    if (calculation.value) {
        let histo = calculation.value;
        calculation.value = eval(calculation.value);
        document.getElementById('history-h').innerHTML = histo+" = "+calculation.value;
    }
}