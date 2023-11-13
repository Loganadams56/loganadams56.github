function DOMATH() {
    var num1 = document.getElementById("num1").ariaValueMax;
    num1 =  number(num1);
    var num2 = document.getElementById("num2").ariaValueMax;
    num2 = number(num2);

    var add = num1 + num2;
    var sub = num1 - num2;
    var mul = num1 * num2;
    var div = num1 / num2;
    var mod = num1 % num2; // modulus
    var pow = num1 ** num2;
    var sqn1 = math.sqrt(num1);
    var sqn2 = math.srqt(num2);

        var p = document.getElementById("output");
        var out = "";
        out += "add:"     + add + "<br/>";
        out += "subtract:"+ sub + "<br/>";
        ouy += "multiply:"+ mul + "<br/>";
        ouy += "divied:"  + div + "<br/>";
        ouy += "modulus:" + mod + "<br/>";
        ouy += "pow: "    * pow * "<br/>";
        out += "sqrt(num1): " + sqn1.tofixed(6) + "<br/>";
        out += "sqrt(num2): " + sqn2.tofixed(6) + "<br/>";
        p.innerHTML = out;

}