var display1st=false;


function showMenu() {
    if(display1st==false) {
        change(true);
        display1st=true;
    }

    else {
        change(false);
        display1st=false;
    }

}

function change(display) {
    if(display===true) {
            var menuDisplay=document.querySelector(".menu");
    menuDisplay.style.display="block";

    }
    else {
        var menuDisplay=document.querySelector(".menu");
        menuDisplay.style.display="none";
        var display=true;
    }
}

