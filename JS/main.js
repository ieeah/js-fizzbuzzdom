
const board = document.querySelector(".board");
const box = document.querySelector(".box");
// creare un loop che giri 100 volte
// ad ogni loop deve inserire un div.box all'interno di board
// a seconda del numero del box stesso, verificare che sia divisibile o meno per 3, per 5 e per entrambi, e in base a questo assegnarli una classe che ne modifichi sfondo e contenuto
for (let i = 1; i < 101; i++) {
    board.innerHTML += `<div class=box>${i}</div>`;
    
        // if (i % 3) {
        //     box.classList.add("fizz");
        //     console.log("divisibile per 3");
        // } else if (i % 5) {
        //     box.classList.add("buzz");
        //     console.log("divisibile per 5");
        // } else if ((i % 3) && (i % 5)) {
        //     box.classList.add("fizzBuzz");
        //     console.log("divisibile per entrambi");
        // }

}
