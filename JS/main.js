const board = document.querySelector(".board");


for (let i = 1; i < 101; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    
        if ((i % 3 == 0) && (i % 5 == 0)) {
            board.append(div);
            div.classList.add('fizzBuzz');
            div.innerText = `fizzBuzz`;
            } else if (i % 5 == 0) {
            board.append(div);
            div.classList.add('buzz');
            div.innerText = `buzz`;
        } else if (i % 3 == 0) {
            board.append(div);
            div.classList.add('fizz');
            div.innerText = `fizz`;
        } else {
            board.append(div);
            div.innerText = `${i}`;
        }
}
