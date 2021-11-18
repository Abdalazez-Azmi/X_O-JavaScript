let values = document.getElementsByClassName("values");
let winner = document.getElementById("winner");
let audio = new Audio("victory.mp3");
let counts = document.getElementById("counts");
let x_1 = 0;
let o_1 = 0;
const x = ()=>{
  counts.innerHTML = `${x_1 ++} - ${o_1}`;
}
const o = ()=>{
  counts.innerHTML = `${x_1} - ${o_1 ++ }`;
}
window.onload = x()
window.onload = o()

const mute = () => {
  audio = "";
};

const again = () => {
  for (let i = 0; i < values.length; i++) {
    values[i].innerHTML = "";
  }
};

const game = () => {
  if ((event.target.innerHTML = "x")) {
    event.target.innerHTML = "o";
  }

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
    x()
    setTimeout(function () {
      again();
      winner.innerHTML = "";
    }, 4000);

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
    o()
    setTimeout(function () {
      again();
      winner.innerHTML = "";
    }, 4000);
    audio.play();
  } else {
    winner.innerHTML = "No one win";
  }
};

