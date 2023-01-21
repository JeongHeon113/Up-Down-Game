//랜덤번호 지정
//유저가 번호를 입력하고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호 < 유저번호 Down!
//랜덤번호 > 유저번호 Up!
//Reset버튼을 누르면 게임이 리셋
//5번의 기회를 다쓰면 게임이 끝남(더이상 추측x, 버튼이 disable)
//유저가 1-100 번위 밖에 숫자를 입력하면 알려줌, 기회를 깍지 않음
//유저가 이미 입력한 숫자를 입력하면 알려줌, 기회를 깍지 않음

let computeNum = 0;
let playB = document.getElementById("play_b");
let resetB = document.getElementById("reset_b");
let userN = document.getElementById("user_num");
let chances = 5;
let chanceArea = document.getElementById("chance_");
let gameOver = false;
let textArea = document.getElementById("text_area");
let history = [];

playB.addEventListener("click", play);
resetB.addEventListener("click", reset);
chanceArea.textContent = `남은기회 : ${chances}번`;

function randomNum() {
  computeNum = Math.floor(Math.random() * 100) + 1;
  console.log(computeNum);
}
randomNum();

function play() {
  let userV = userN.value;
  if (userV < 1 || userV > 100) {
    textArea.textContent = "1~100 사이의 숫자를 입력해주세요.";
    return;
  }
  if (history.includes(userV)) {
    textArea.textContent = "이미 사용한 숫자입니다.";
    return;
  }
  chances--;
  chanceArea.textContent = `남은기회 : ${chances}번`
  if (userV > computeNum) {
    textArea.textContent = "Down!";
  } else if (userV < computeNum) {
    textArea.textContent = "Up!";
  } else {
    textArea.textContent = "정답!";
    gameOver = true;
    playB.disabled = true;
    return
  }
  if (chances == 0) {
    gameOver = true;
  }
  history.push(userV);
  if (gameOver) {
    playB.disabled = true;
    textArea.textContent = "꽝!";
  }
  console.log(chances)
}
function reset() {
  randomNum();
  chances = 5;
  textArea.textContent = "숫자를 입력해 주세요.";
  playB.disabled =false
  gameOver=false
  history=[]
  chanceArea.textContent = `남은기회 : ${chances}번`
}
