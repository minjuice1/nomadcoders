const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos () {
  localStorage.setItem("todos", toDos);
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