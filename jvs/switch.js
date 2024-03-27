
function svitch() {
    let svitch = document.getElementById("svitch").innerHTML;

    console.log(svitch);
    if (svitch == '<i class="fa-solid fa-toggle-off" aria-hidden="true"></i>') {
        document.getElementById("svitch").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
        document.documentElement.style.setProperty('--surati', "url(../img/moon.jpg)");

    }
    else {
        document.getElementById("svitch").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
        document.documentElement.style.setProperty('--surati', "url(../img/sunn.jpg)");
    }


}



