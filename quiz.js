window.onload = init; //Gör att funktionen laddas när sidan startar

function init() {  
    //Skapar funktionen

    const form = document.getElementsByTagName("form")[0]; //Gör att javascripten hittar formuläret
    let correctAnswers = 0; //Skapar en lös variabel som man kan lägga till de rätta svaren på

    document.addEventListener("submit", () => { 
        //Gör att när någon klickar på submit så börjar den att rätta

        const nameValue = form.elements.fråga1.value; //Tar fram valuet från första frågan
        const nameValue2 = form.elements.fråga2.value;
        const check = form.elements.fråga3; //Denna tar fram alla som är markerade
        const check2 = form.elements.fråga4;
        const nameValue3 = form.elements.fråga5.value.toLowerCase(); //Eftersom att detta är en skrivfråga valde jag att göra den lowercase för att den inte ska ge fel i onödan
        const nameValue4 = form.elements.fråga6.value;

        if (nameValue == "14") {
            correctAnswers++; //Lägger till 1 på variabeln som skriver ut rätt svar
        } //Skapar en if-sats så om valuet var lika med 14 så går den vidare i if-satesen
        if (nameValue2 == "putter") {
            correctAnswers++;
        }

        for (let i = 0; i < check.length; i++) {
            if (check[i].checked == true) { 
                if (check[i].value == "green") { 
                } //Denna Ser ifall valet var rätt
                if (check[i].value == "bunker") {
                    correctAnswers++;
                }
            } //Gör att om den är markerad så kommer den kolla om valet var rätt
        } //Detta är en forloop som gör att den går igenom lika många som markerade checkboxes

        for (let i = 0; i < check2.length; i++) {
            if (check2[i].checked == true) {
                if (check2[i].value == "eagle") {
                    correctAnswers++;
                }
                if (check2[i].value == "albatros") {
                    correctAnswers++;
                }
                if (check2[i].value == "boogey") {
                    correctAnswers++;
                }
            }
        }
        if (nameValue3 == "driver" || nameValue3 == "drivern") {
            correctAnswers++;
        } //Här har jag en eller för att vissa kan skriva drivern istället för driver
        if (nameValue4 == "åberg") {
            correctAnswers++;
        }

        sessionStorage.setItem("score", correctAnswers); //Sparar dina poäng så att man kan skriva ut dem. sessionStroage gör att det försvinner när du stänger ner sidan
    });
}