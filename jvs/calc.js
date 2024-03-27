function calculate(btn) {
    console.log();

    let buttonvalue = btn.innerHTML;
    let ansvalue = document.getElementById("ans").innerHTML;
    let gamosvalue = document.getElementById("gamosaxuleba").innerHTML;





    if (ansvalue == '0') {

        document.getElementById("ans").innerHTML = "";

    }
    if (gamosvalue == '0') {

        document.getElementById("gamosaxuleba").innerHTML = "";

    }

    document.getElementById("ans").innerHTML += buttonvalue;
    document.getElementById("gamosaxuleba").innerHTML += buttonvalue;

    let anslength = document.getElementById("ans").innerHTML.length;







    if (anslength >= 15) {

        let button = document.querySelectorAll('.calculate');


        button.forEach(jondo => {
            console.log(jondo);
            jondo.removeAttribute("onclick")
        });




    }



}
