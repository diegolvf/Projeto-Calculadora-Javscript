function calc() {
    var num1 = parseFloat(document.getElementById("num1").value); //parseFloat() - conversão de texto para número.
    var num2 = parseFloat(document.getElementById("num2").value); //parseFloat() - conversão de texto para número.
    var output = num1 + num2;

    document.getElementById("output").value = output;
}