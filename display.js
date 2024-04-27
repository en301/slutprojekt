window.onload = init;

function init() {
    console.log("Loaded DOM - thanks");

    const score = sessionStorage.getItem("score");
    const scoreTitle = document.getElementById("newtext");
    scoreTitle.textContent = `Du fick ${score}/9 rätt`;
}