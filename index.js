let values = document.getElementsByClassName("values");
let winner = document.getElementById("winner");

const game = () => {
  event.target.innerHTML = 'x'
if(event.target.innerHTML = 'x'){
  event.target.innerHTML = 'o'
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
    // console.log(event.target.innerHTML)
    winner.innerHTML = " The Winner is x";
    console.log(values[0].innerHTML);
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
  }
};
