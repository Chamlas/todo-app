//empty array to store all our tasks
const todoArray = [];

const task = document.getElementById("task");
const calender = document.getElementById("calender");
const addTask = document.getElementById("addtask");
const taskError = document.getElementById("taskerror");
const calenderError = document.getElementById("calendererror");

addTask.addEventListener("click", (e) => {
  //preventing submission to server
  e.preventDefault();

  const taskItem = task.value.trim();
  const calenderItem = calender.value;

  if (taskItem === "") {
    taskError.classList.remove("taskerror");
    console.error("Please input task");
    return;
  }

  if (calenderItem === "") {
    calenderItem.classList.remove("calendererror");
    console.error("Please input date");
    return;
  }

  //put data in object
  const newEntry = {
    id: crypto.randomUUID(),
    task: taskItem,
    date: calenderItem,
  };

  todoArray.push(newEntry);
  localStorage.setItem("todo", todoArray);
  console.log(todoArray);

  renderTasks();

  //clear input values
  task.value = "";
  calender.value = "";

  document.getElementById("dialog-form").classList.remove();
});

//function to render tasks from array
function renderTasks() {
  const container = document.getElementById("container");

  todoArray.forEach((todo) => {
    const list = document.createElement("li");
    list.classList.add("task-list");
    list.innerHTML = `<input type = "checkbox" name="checkbox" onClick = {checkbox()}>  ${todo.task}  ${todo.date} <button class= 'delete' onClick={delete}>X</button>`;
    container.appendChild(list);
  });
}

//function to mark task is completed
function checkbox() {
  setTimeout(() => {
    todoArray.splice((todo) => todo.id === id);
  });
}

checkbox();
