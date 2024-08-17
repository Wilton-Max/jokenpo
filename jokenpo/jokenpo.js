document.addEventListener("DOMContentLoaded", function () {
    const options = ["pedra", "papel", "tesoura"];
    let wins = 0;
    let losses = 0;
    let ties = 0;

    const buttons = document.querySelectorAll("#options button");
    const resultDiv = document.getElementById("result");
    const score = document.getElementById("score");
    const player = document.getElementById("player");

    const computerDiv = document.getElementById("computer");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            const playerChoice = options[i];
            const computerChoice = ComputerChoice();

            player.textContent = playerChoice.toUpperCase();
            computer.textContent = computerChoice.toUpperCase();

            const result = winner(playerChoice, computerChoice);
            if (result === "tie") {
                ties++;
                resultDiv.textContent = "Empate!";
            } else if (result === "player") {
                wins++;
                resultDiv.textContent = "Você venceu!";
            } else {
                losses++;
                resultDiv.textContent = "O computador venceu!";
            }

            totalScore();
        });
    });
/*************GERA UMA ESCOLHA ALEATÓRIA DO COMPUTADOR**************/
    function ComputerChoice() {
        const random = Math.floor(Math.random() * options.length);
        return options[random];
    }  

/************FUNÇÃO DE ESCOLHA DO VENCENDOR*******************/
    function winner(player, computer) {
        if (player === computer) {
            return "tie";
        } else if ((player === "pedra" && computer === "tesoura") || (player === "papel" && computer === "pedra") || (player === "tesoura" && computer === "papel")) {
            return "player";
        } else {
            return "computer";
        }
    }
/*********************FUNÇÃO QUE INCLUI OS DADOS NO PLACAR************************/
    function totalScore() {
        document.getElementById('wins').innerText = wins
        document.getElementById('losses').innerText = losses
        document.getElementById('ties').innerText = ties
    }
});





 
