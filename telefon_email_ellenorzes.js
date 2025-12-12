function ellenor(){
    let telefon = document.forms["alapUrlap"]["tel"].value;
    let email = document.forms["alapUrlap"]["mail"].value;

    let telefonfilter = /^\+36[0-9]{9}$/;
    if (!telefonfilter.test(telefon)) {
        alert("A telefonszám formátuma nem megfelelő.");
        return false;
    }
    let telefonkkir = document.getElementById("telEredmeny");
    telefonkkir.innerText = "A telefonszám mező helyes.";

    let emailfilter = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailfilter.test(email)) {
        alert("Az email cím formátuma nem megfelelő.");
        return false;
    }
    let emailkkir = document.getElementById("mailEredmeny");
    emailkkir.innerText = "Az email cím mező helyes.";
    
    return false;


}