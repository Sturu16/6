let pm = () => {
    let number = document.getElementById("ans").innerHTML;

    console.log(number);

    if (number > 0) {
      document.getElementById("ans").innerHTML = "-"+number;
    }
    else{
        
        let pirvelisimbolo = number.slice(0, 1);
        let darcheniliricxvi = number.slice(1, number.length);
        document.getElementById("ans").innerHTML = darcheniliricxvi;
    }





}