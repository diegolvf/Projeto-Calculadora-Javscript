function calc(op) {
    var num1 = parseFloat(document.getElementById("num1").value); //parseFloat() - conversão de texto para número.
    var num2 = parseFloat(document.getElementById("num2").value); //parseFloat() - conversão de texto para número.
    var output = 0;
    switch(op) {
        case '+' : output = num1 + num2; break
        case '-' : output = num1 - num2; break
        case '*' : output = num1 * num2; break
        case '/' : output = num1 / num2; break
    }

    document.getElementById("output").value = output;
    
    var newHistory = "<div>" + num1 + " " + op + " " + num2 + " = " + output + "</div>";
    //<div>" + num1 + " " + op + " " + num2 + " = " + output + "</div> concatenação de valores para fazer a saída do resultado do cáculo.

    var history = document.getElementById("history");

    history.innerHTML = newHistory + history.innerHTML;
    //inverte a ordem do histórico, fazendo com que a última opração realizada seja a primeira a  ser exbida.
    
    //Inner html = inserir elementos html 
    //+= acrescenta sem sobrescrever em cima do dado anterior. (foi removido).

    if(history.children.length > 10) {
        history.removeChild(history.childNodes[10]);
    }
    
}