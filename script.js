document.addEventListener("DOMContentLoaded", function() {
    // Popola ogni cartella con 15 numeri
    for (let cartellaNum = 1; cartellaNum <= 6; cartellaNum++) {
        let cartella = document.getElementById(`cartella${cartellaNum}`);
        for (let i = 1; i <= 15; i++) {
            let numero = (cartellaNum - 1) * 15 + i; // Calcola il numero da mostrare
            let cell = document.createElement("div");
            cell.innerText = numero;
            cartella.appendChild(cell);
        }
    }

    const drawNumberButton = document.getElementById("drawNumber");
    const currentNumber = document.getElementById("currentNumber");
    let drawnNumbers = [];

    drawNumberButton.onclick = function() {
        let number;
        do {
            number = Math.floor(Math.random() * 90) + 1;
        } while (drawnNumbers.includes(number));

        drawnNumbers.push(number);
        currentNumber.innerText = `Numero Estratto: ${number}`;
        document.querySelectorAll('.cartella div').forEach(cell => {
            if (cell.innerText == number) {
                cell.classList.add("drawn");
            }
        });
    };

    const resetGameButton = document.getElementById("resetGame");
    const resetNotification = document.getElementById("resetNotification");

    resetGameButton.onclick = function() {
        if (confirm("Sei sicuro di voler iniziare una nuova partita? Questo azzererà tutti i numeri estratti.")) {
            drawnNumbers = [];
            currentNumber.innerText = "";
            document.querySelectorAll('.cartella div').forEach(cell => {
                cell.classList.remove("drawn");
            });
            resetNotification.style.display = "block";
            setTimeout(() => {
                resetNotification.style.display = "none";
            }, 5000);
        }
    };
});
