let toDo = [];

if (
  localStorage.getItem("toDo") !== null &&
  localStorage.getItem("toDo") !== ""
) {
  toDo = localStorage.getItem("toDo").split(",");
}

let toDoList = document.getElementById("todoList");
let alert = document.getElementsByClassName("alert")[0];

//Add to do
function addToDoList() {
  let toDoText = document.getElementById("todo");

  if (toDoText.value == "") {
    showAlert("Görev giriniz", "danger");
  } else {
    let newElement = document.createElement("li");
    newElement.id = `toDoLi${toDo.length + 1}`;

    newElement.addEventListener("click", () => {
      newElement.classList.toggle("active");
    });

    if (toDo.length % 2 == 0)
      newElement.classList.add("list-group-item-secondary");
    else newElement.classList.add("list-group-item-light");

    newElement.classList.add(
      "list-group-item",
      "list-group-item-action",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    newElement.innerHTML = `<span id="task">${toDoText.value}</span> <button class="btn" onClick="deleteToDo(event)">X</button>`;
    toDoList.appendChild(newElement);

    toDo.push(toDoText.value);

    localStorage.setItem("toDo", toDo);
    toDoText.value = ""

    showAlert("Başarıyla eklendi", "success");
  }
}

//Load saved todo
function loadToDoList() {
  if (toDo !== null && toDo[0] !== "") {
    for (let index = 0; index < toDo.length; index++) {
      let newElement = document.createElement("li");
      newElement.id = `toDoLi${index + 1}`;

      newElement.addEventListener("click", () => {
        newElement.classList.toggle("active");
      });

      if (index % 2 == 0) newElement.classList.add("list-group-item-secondary");
      else newElement.classList.add("list-group-item-light");

      newElement.classList.add(
        "list-group-item",
        "list-group-item-action",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );

      newElement.innerHTML = `<span id="task">${toDo[index]}</span> <button class="btn" onClick="deleteToDo(event)">X</button>`;
      toDoList.appendChild(newElement);
    }
  }
}

//Delete saved toDo
function deleteToDo(event) {
  let selectedItems = toDoList.getElementsByClassName("active");

  if (selectedItems.length == 0) {
    let deletingToDoList = event.target.parentElement;
    let task = deletingToDoList.querySelector("#task").innerHTML;

    toDo.pop(task);
    localStorage.setItem("toDo", toDo);
    toDoList.removeChild(deletingToDoList);
  } else {
    for (let i = selectedItems.length; i > 0; i--) {
      let task = selectedItems[0].querySelector("span").innerHTML;
      toDo.pop(task);
      localStorage.setItem("toDo", toDo);
      toDoList.removeChild(selectedItems[0]);
    }
  }

  showAlert("Başarıyla silindi", "success");
}

//Show alert
function showAlert(message, priority) {
  alert.classList.remove("d-none");
  alert.classList.remove("alert-success");
  alert.classList.remove("alert-danger");
  alert.classList.remove("alert-warning");
  $(".alert").fadeIn();

  switch (priority) {
    case "success":
      alert.classList.add("alert-success");
      break;
    case "danger":
      alert.classList.add("alert-danger");
      break;
    case "warning":
      alert.classList.add("alert-warning");
      break;
  }

  alert.querySelector("#message").innerHTML = message;

  setTimeout(()=>{$(".alert").fadeOut("slow");},3000)
}

function hideAlert() {
  $(".alert").fadeOut("slow");
}

