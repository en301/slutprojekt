window.onload = init;

function init() {

    const score = sessionStorage.getItem("score"); //Gör dina poäng till en variabel
    const scoreTitle = document.getElementById("newText"); //Gör min gamla text till en variabel
    scoreTitle.textContent = `Du fick ${score}/9 rätt`; //Gör att den gamla texten byts ut till den nya med score

    sessionStorage.clear(); //Tar bort all data så att man kan köra quizet igen
}