function op(op) {
    console.log(op.innerHTML);
    let gamosaxuleba = document.getElementById("ans").innerHTML;
    console.log(gamosaxuleba);


    let bolo = gamosaxuleba[gamosaxuleba.length - 1];
    let boloindex = gamosaxuleba.length - 1;
    console.log(bolo);

    if (bolo == '÷' || bolo == '+' || bolo == '∗' || bolo == '−' || bolo == '÷') {

        // let ricxvi = gamosaxuleba.slice(0, bolo);
        // let op = gamosaxuleba.slice(bolo, bolo + 1);
        // console.log(ricxvi, op, op.innerHTML);
        // ricxvi += op.innerHTML;
        // document.getElementById("ans").innerHTML = ricxvi;
      


    }




    gamosaxuleba += op.innerHTML
    document.getElementById("ans").innerHTML = gamosaxuleba;


}