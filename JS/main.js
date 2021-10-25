
const board = document.querySelector(".board");
const box = document.querySelector(".box");

// creare un loop che giri 100 volte
// ad ogni loop deve inserire un div.box all'interno di board
// a seconda del numero del box stesso, verificare che sia divisibile o meno per 3, per 5 e per entrambi, e in base a questo assegnarli una classe che ne modifichi sfondo e contenuto
// for (let i = 1; i < 101; i++) {
//     const div = document.createElement('div');
//     board.append(div);
//     const thisBox = document.querySelectorAll("div");
//     thisBox.classList.add("box");
// }


for (let i = 1; i < 101; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    // board.append(div);
    // board.innerHTML += `<div class=box>${i}`;
    
        if (i % 3 == 0) {
            board.append(div);
            div.classList.add('fizz');
            div.innerText = `fizz`;
        } else if (i % 5 == 0) {
            board.append(div);
            div.classList.add('buzz');
            div.innerText = `buzz`;
        } else if ((i % 3 == 0) && (i % 5 == 0)) {
            board.append(div);
            div.classList.add('fizzBuzz');
            div.innerText = `fizzBuzz`;
        } else {
            board.append(div);
            div.innerText = `${i}`;
        }

    // board.innerHTML += `</div>`;
}
