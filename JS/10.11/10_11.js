const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const toDos = [];

function saveToDos () {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // todo-list에서 어떤 li를 클릭했는지 알고 싶을 때
  // console.log(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  // preventDefault()를 추가하면 새로고침해도 event가 작동하지 않음.
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  // 화면에 그려주기 전에 (paintTodo), toDos 배열에 먼저 push
  toDos.push(newTodo);
  paintToDo(newTodo);
  // 화면에 그려준 후 (paintTodo), localStorage에 toDos 배열을 추가.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// item을 넣으면, 해당 item을 구체적으로 보여준다.
function sayHello(item) {
  console.log("this is the turn of", item);
}

// localStorage에 있는 이상한 string 형태의 todos를 일반적인 array형태로 변경.
const savedToDos = localStorage.getItem(TODOS_KEY);
// saveToDos이 존재한다면, parse
if(savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  
  // 배열안에 있는 각각의 값들에 대해 function을 적용할 수 있음.
  parsedToDos.forEach(sayHello);

  // 위처럼 function을 만들지 않아도 됨(arrow function) shortcut
  // parsedToDos.forEach((item) => console.log("this is the turn of", item));
}