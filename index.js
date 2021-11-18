let values = document.getElementsByClassName("values");
let winner = document.getElementById("winner");
let audio = new Audio("victory.mp3");
let counts = document.getElementById("counts");
let x_1 = 0;
let o_1 = 0;
window.onload = counts.innerText = `X : ${x_1} --- O : ${o_1}`;

const x = () => {
  x_1++;
  window.onload = counts.innerText = `X : ${x_1} --- O : ${o_1}`;
};
const o = () => {
  o_1++;

  window.onload = counts.innerText = `X : ${x_1} --- O : ${o_1}`;
};
const mute = () => {
  audio = "";
};

const again = () => {
  for (let i = 0; i < values.length; i++) {
    values[i].innerHTML = "";
  }
  number = 0
};
let number = 0;

const game = () => {
  if (event.target.innerHTML) {
    return;
  }
  if (number === 8) {
    winner.innerHTML = "Draw";
    setTimeout(() => {
      again();
    }, 2000);
  }
  
  if (number % 2 === 0) {
    event.target.innerHTML = "x";
    winner.innerHTML = 'O Turn'

  } else {
    event.target.innerHTML = "o";
    winner.innerHTML = 'X Turn '

  }
  number++;

  if (
    (values[0].innerHTML === "x" &&
      values[1].innerHTML === "x" &&
      values[2].innerHTML === "x") ||
    (values[0].innerHTML === "x" &&
      values[4].innerHTML === "x" &&
      values[8].innerHTML === "x") ||
    (values[0].innerHTML === "x" &&
      values[3].innerHTML === "x" &&
      values[6].innerHTML === "x") ||
    (values[2].innerHTML === "x" &&
      values[4].innerHTML === "x" &&
      values[6].innerHTML === "x") ||
    (values[1].innerHTML === "x" &&
      values[4].innerHTML === "x" &&
      values[7].innerHTML === "x") ||
    (values[2].innerHTML === "x" &&
      values[5].innerHTML === "x" &&
      values[8].innerHTML === "x") ||
    (values[0].innerHTML === "x" &&
      values[1].innerHTML === "x" &&
      values[2].innerHTML === "x") ||
    (values[3].innerHTML === "x" &&
      values[4].innerHTML === "x" &&
      values[5].innerHTML === "x") ||
    (values[6].innerHTML === "x" &&
      values[7].innerHTML === "x" &&
      values[8].innerHTML === "x")
  ) {
    winner.innerHTML = " The Winner is x";
    audio.play();
    x();
    setTimeout(function () {
      again();
      winner.innerHTML = "";
    }, 2500);
  } else if (
    (values[0].innerHTML === "o" &&
      values[1].innerHTML === "o" &&
      values[2].innerHTML === "o") ||
    (values[0].innerHTML === "o" &&
      values[4].innerHTML === "o" &&
      values[8].innerHTML === "o") ||
    (values[0].innerHTML === "o" &&
      values[3].innerHTML === "o" &&
      values[6].innerHTML === "o") ||
    (values[2].innerHTML === "o" &&
      values[4].innerHTML === "o" &&
      values[6].innerHTML === "o") ||
    (values[1].innerHTML === "o" &&
      values[4].innerHTML === "o" &&
      values[7].innerHTML === "o") ||
    (values[2].innerHTML === "o" &&
      values[5].innerHTML === "o" &&
      values[8].innerHTML === "o") ||
    (values[0].innerHTML === "o" &&
      values[1].innerHTML === "o" &&
      values[2].innerHTML === "o") ||
    (values[3].innerHTML === "o" &&
      values[4].innerHTML === "o" &&
      values[5].innerHTML === "o") ||
    (values[6].innerHTML === "o" &&
      values[7].innerHTML === "o" &&
      values[8].innerHTML === "o")
  ) {
    winner.innerHTML = " The Winner is O";
    o();
    setTimeout(function () {
      again();
      winner.innerHTML = "";
    }, 4000);
    audio.play();
  } 
};
