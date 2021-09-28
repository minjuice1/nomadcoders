const form = document.querySelector('#form');
const selectNum = document.querySelector('#select-num');
const guessNum = document.querySelector('#guess-num');
const matchNum = document.querySelector('#match');

const HIDDEN_CLASSNAME = "hidden";
const NUMBER_KEY = "number";

function finalResult() {
  const final = document.querySelector("#result_span");
  const randomPick = Math.floor(Math.random() * selectNum.value);
  console.log(randomPick < Number(guessNum.value));
  if (randomPick < Number(guessNum.value)) {
    final.innerHTML = 'You Won'
  } else if (randomPick > Number(guessNum.value)) {
    final.innerHTML = 'You Lost'
  } else {
    final.innerHTML = 'Draw'
  }
}

function onFormSubmit(event) {
  if (guessNum.value > selectNum.value) {
    alert("범위를 넘었습니다. 숫자를 확인해주세요.")
  } else {
    event.preventDefault();
    const _selectNum = selectNum.value;
    _selectNum.innerHTML = `${selectNum}`

    guessNum.classList.add(HIDDEN_CLASSNAME);
    const _guessNum = guessNum.value;
    localStorage.setItem(NUMBER_KEY, _guessNum);
    onResultSubmit(_guessNum);
    finalResult();
  }
}

function onResultSubmit(_guessNum) {
  matchNum.innerHTML = `You chose: ${_guessNum}, the machine chose: ${Math.floor(Math.random() * selectNum.value)}`;
  matchNum.classList.remove(HIDDEN_CLASSNAME);
  
}

// bnt를 눌러도, 데이터가 날아가지 않고 localStorage에 저장됨.
const savedNumber = localStorage.getItem(NUMBER_KEY);
if(savedNumber === null) {
  // show the form
  guessNum.classList.remove(HIDDEN_CLASSNAME);
  form.addEventListener("submit", onFormSubmit);
} else {
  //show the number
  onResultSubmit(savedNumber);
}


