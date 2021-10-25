
const board = document.querySelector(".board");
const box = document.querySelector(".box");
const div = document.createElement('div');
// creare un loop che giri 100 volte
// ad ogni loop deve inserire un div.box all'interno di board
// a seconda del numero del box stesso, verificare che sia divisibile o meno per 3, per 5 e per entrambi, e in base a questo assegnarli una classe che ne modifichi sfondo e contenuto
// for (let i = 1; i < 101; i++) {
//     board.append(div);
    
    
// }

board.append(div);
document.querySelector(".board > div").classList.add("box");

























// if (i % 15 == 0) {
//     document.querySelector(".box").classList.add("fizzBuzz");
//     // console.log("divisibile per entrambi");
// } else 
// if (i % 5 == 0) {
//     document.querySelector(".box").classList.add("buzz");
//     // console.log("divisibile per 5");
// } else if (i % 3 == 0) {
//     document.querySelector(".box").classList.add("fizz");
//     // console.log("divisibile per 3");
// }
