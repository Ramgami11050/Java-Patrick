var start;

window.onload = 
function execute () {
    start = document.getElementsByTagName("body");
    for(let i=0; i<start.length; i++) {

        var solicitacion = window.prompt ("1. 2. 3. 4.");
        if (FIRST == solicitacion){

                    var PopUp = document.getElementById (solicitacion);
                    document.write (PopUp.innerHTML);}

                    const FIRST = 1
                    const SECOND = 2
                    const THIRD = 3
                    const FOURTH = 4

    }
}