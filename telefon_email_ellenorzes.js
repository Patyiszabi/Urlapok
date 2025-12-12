let telefonkiir = document.getElementById("telEredmeny");
let emailkiir = document.getElementById("mailEredmeny");

function telefonEllenor(telefon) { 
 error = ""; 
 let newstrng = telefon.replace( /[\(\)\.\-\ ]/g ,'' ); 
 let filter = /^\d+$/; 
 if(!filter.test(newstrng)) { 
 error = "Kérem adjon meg érvényes telefonszámot!\n"; 
 } 
 return error; 
} 

function ellenor(){
    let telefon = document.forms["urlap"]["tel"].value;
    let email = document.forms["urlap"]["mail"].value;


    let telerror = telefonEllenor(telefon);
    if (telerror) {
        //alert(telerror);
        telefonkiir.classList.add("hiba");
        telefonkiir.innerText = telerror;
        return false;
    }
    else{
        telefonkiir.innerText = "A telefonszám mező helyes.";
        telefonkiir.classList.remove("hiba");
        return false;
    }
}



    /*let telefonfilter = /^\06[0-9]{9} $/;
    if (!telefonfilter.test(telefon)) {
        //alert("A telefonszám formátuma nem megfelelő.");
        telefonkiir.classList.add("hiba");
        telefonkiir.innerText = "A telefonszám formátuma nem megfelelő.";
        return false;
    }

    if ( telefon == "" || telefon == null || telefon.trim() === "" ) {
        //alert("A telefonszám mező nem lehet üres.");
        telefonkiir.classList.add("hiba");
        telefonkiir.innerText = "A telefonszám mező nem lehet üres.";
        return false;
    }
    telefonkiir.innerText = "A telefonszám mező helyes.";
    telefonkiir.classList.remove("hiba");


    if ( email == "" || email == null || email.trim() === "" ) {
        //alert("Az email cím mező nem lehet üres.");
        emailkiir.classList.add("hiba");
        emailkiir.innerText = "Az email cím mező nem lehet üres.";
        return false;
    }

    let emailfilter = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailfilter.test(email)) {
        //alert("Az email cím formátuma nem megfelelő.");
        emailkiir.classList.add("hiba");
        emailkiir.innerText = "Az email cím formátuma nem megfelelő.";
        return false;
    }
    emailkiir.innerText = "Az email cím mező helyes.";
    emailkiir.classList.remove("hiba");

    return false;
    */

