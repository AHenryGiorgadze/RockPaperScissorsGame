var Score;
var PlayerNumber = 0;
var ComputerNumber;
var Mobile = false;
var X1 = 200;

var ClickedButton;
var button4Img = document.getElementById("Button-4-img");
var button4 = document.getElementById("Button-4");
var GameResult = document.getElementById("GameResult");
var GameResultText = document.getElementById("GameResult-text");

var x;
var y;
function animation1(X, Y) {
  ClickedButton.style.transform = "translate(" + X + "px ," + Y + "px)";
  ClickedButton.style.transition = "transform 2s";
  setInterval(animation2, 2000);
}

function animation2() {
  console.log(x + " " + y);
  ClickedButton.style.transform = "translate(" + (x - X1) + "px," + y + "px)";
  ClickedButton.style.transition = "transform 2s";

  GameResult.style.transform = "scale(1,1)";
  GameResult.style.transition = "transform 2s";

  button4.style.transform = "scale(1,1)";
  button4.style.transition = "transform 2s";
}

function DissapearAnimation(o) {
  o.style.transform = "scale(0,0)";
  o.style.transition = "transform 2s";
}

function OnButtonClick(n) {
  if (window.innerWidth < 600) {
    Mobile = true;
    X1 = 100;
  }

  PlayerNumber = n;

  ComputerNumber = Math.floor(Math.random() * 3) + 1;
  console.log(ComputerNumber + " " + n);

  if (ComputerNumber == 1) {
    if (PlayerNumber == 3) {
      GameResultText.innerHTML = "You Lose";
      Score++;
    } else {
      if (PlayerNumber == 2) {
        GameResultText.innerHTML = "You Win";
      } else {
        if (PlayerNumber == 1) {
          GameResultText.innerHTML = "Draw";
          Score++;
        }
      }
    }
  } else {
    if (ComputerNumber == 2) {
      button4Img.src = "./images/icon-scissors.svg";
      button4.style.background = "rgb(255, 181, 70)";
      button4.style.boxShadow = "0px 7px rgb(192, 137, 54)";
      if (PlayerNumber == 1) {
        GameResultText.innerHTML = "You Lose";
        Score++;
      } else {
        if (PlayerNumber == 3) {
          GameResultText.innerHTML = "You Win";
        } else {
          if (PlayerNumber == 2) {
            GameResultText.innerHTML = "Draw";
            Score++;
          }
        }
      }
    } else {
      if (ComputerNumber == 3) {
        button4Img.src = "./images/icon-rock.svg";
        button4.style.background = "rgb(255, 70, 70)";
        button4.style.boxShadow = "0px 7px rgb(182, 52, 52)";
        if (PlayerNumber == 2) {
          GameResultText.innerHTML = "You Lose";
          Score++;
        } else {
          if (PlayerNumber == 1) {
            GameResultText.innerHTML = "You Win";
          } else {
            if (PlayerNumber == 3) {
              GameResultText.innerHTML = "Draw";
              Score++;
            }
          }
        }
      }
    }
  }
  if (Mobile) {
    if (n == 1) {
      x = 125;
      y = 75;
    } else {
      if (n == 2) {
        x = -125;
        y = 75;
      } else {
        x = 0;
        y = -100;
      }
    }
  } else {
    if (n == 1) {
      x = 130;
      y = 75;
    } else {
      if (n == 2) {
        x = -105;
        y = 75;
      } else {
        x = 0;
        y = -110;
      }
    }
  }

  ClickedButton = document.getElementById("Button-" + n);
  DissapearAnimation(document.getElementById("Triangle"));

  for (var m = 1; m <= 3; m++) {
    if (m != n) {
      DissapearAnimation(document.getElementById("Button-" + m));
    }
  }

  animation1(x, y);
}
