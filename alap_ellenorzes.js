// /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/

let nevkiir = document.getElementById("nevEredmeny");
function ellenorAlap(){
    let nev = document.forms["alapUrlap"]["nev"].value;

    if ( nev == "" || nev == null || nev.trim() === "" ) {
        //alert("A név mező nem lehet üres.");
         if(nevkiir)
         {
            nevkiir.innerText = "A név mező nem lehet üres.";
            nevkiir.classList.add("hiba");
         }
        return false;
    }

    let nevfilter = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/;
    if (!nevfilter.test(nev)) {
        //alert("A név mező csak betűket tartalmazhat.");
        nevkiir.classList.add("hiba");
        nevkiir.innerText = "A név mező csak betűket tartalmazhat.";
        return false;
    }
    nevkiir.innerText = "A név mező helyes.";
    nevkiir.classList.remove("hiba");
    return false;
}