var calcOutput = document.querySelector('.text');
let nilai = null;
let opr;
let val = '';
function calc() {
    let float = parseFloat(val);
    if (nilai == null) {
        nilai = float;
    }
    else {
        if(opr == '+')
        nilai += float;
        if(opr == '-')
        nilai -= float;
        if(opr == 'x')
        nilai *= float;
        if(opr == ':')
        nilai /= float;
    }
    if(opr == '='){
    calcOutput.textContent = nilai;
}
console.log(nilai.toString());
}


function output(button, n) {
    if(n == 1) {
        calc();
        if (oprvalue == 0 && calcOutput.textContent != 0) {
            oprvalue = 1;
            opr = button;
            if(button != '=')
            calcOutput.textContent += button;
            else if(button == '='){
            calc();
            oprvalue = 0;
            }
            val = '';
        }
    }
    else if (n == 0){
        if(calcOutput.textContent == 0 && button != '<-' && button != '.' && button != '+/-'){
        calcOutput.textContent = button;
        val += button;
        }
        else if(button == '<-') {
        calcOutput.textContent = calcOutput.textContent.slice(0, -1);
        val = val.slice(0,-1);
        }
        else if(button == '.' && !calcOutput.textContent.includes('.'))
        calcOutput.textContent += button;
        else if(button == '+/-' && calcOutput.textContent[0] != '-')
        calcOutput.textContent = '-' + calcOutput.textContent;
        else if(button != '<-' && button != '.' && button != '+/-' && button != 'AC'){
        calcOutput.textContent += button;
        val += button;
        }
        if(button == 'AC' || calcOutput.textContent.length == 0){
        calcOutput.textContent = '0';
        val = '';
        nilai = null;
        opr = null;
        }
        oprvalue = 0;
    }

 }

  
  