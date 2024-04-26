window.onload = init;

function init (){
    const form = document.getElementsByTagName("form")[0]
    let correctAnswers = 0;

    document.addEventListener("submit", () => {
        const nameValue = form.elements.fråga1.value;
        const nameValue2 = form.elements.fråga2.value;
        const check = form.elements.fråga3;
        const check2 = form.elements.fråga4;
        const nameValue3 = form.elements.fråga5.value.toLowerCase();
        const nameValue4 = form.elements.fråga6.value;
        
        if (nameValue == "14"){
            correctAnswers++;
        }
        if (nameValue2 == "putter"){
            correctAnswers++;
        }

        for (let i = 0; i < check.length; i++) {
          
            if (check[i].checked == true) {
                  
                if(check[i].value == "green"){
                    correctAnswers++;
                }
                if(check[i].value == "bunker"){
                    correctAnswers++;
                }
                    
            }
        }

        for (let i = 0; i < check2.length; i++) {
          
            if (check2[i].checked == true) {
                  
                if(check2[i].value == "eagle"){
                    correctAnswers++;
                }
                if(check2[i].value == "albatros"){
                    correctAnswers++;
                }
                if(check2[i].value == "boogey"){
                    correctAnswers++;
                }
                    
            }
        }
        if(nameValue3 == "driver" || nameValue3 == "drivern"){
            correctAnswers++;
        }
        if(nameValue4 == "åberg"){
            correctAnswers++;
        }

        localStorage.setItem("score", correctAnswers);

        document.body.innerHTML = "<h2>Du fick: "+ localStorage.getItem("score") +"/9 rätt</h2>";
    })
}

