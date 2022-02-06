let toDo = [];

if (localStorage.getItem("toDo") !== null) {
  toDo = localStorage.getItem("toDo").split(",");
}

let toDoList = document.getElementById("todoList");

//Add to do
function addToDoList() {
  let toDoText = document.getElementById("todo");

  let newElement = document.createElement("li");

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

  newElement.innerHTML = `${toDoText.value} <button class="btn">X</button>`;
  toDoList.appendChild(newElement);

  toDo.push(toDoText.value);

  localStorage.setItem("toDo", toDo);
}

//Load saved todo
function loadToDoList(){

    for (let index = 0; index < toDo.length; index++) {
        let newElement = document.createElement("li");
  
        if (index % 2 == 0)
          newElement.classList.add("list-group-item-secondary");
        else newElement.classList.add("list-group-item-light");
      
        newElement.classList.add(
          "list-group-item",
          "list-group-item-action",
          "d-flex",
          "justify-content-between",
          "align-items-center"
        );
      
        newElement.innerHTML = `${toDo[index]} <button class="btn">X</button>`;
        toDoList.appendChild(newElement);
    }
    
}

function deleteToDo(){

}

//Yapılacaklar

//Silme işlemi yapılacak
//Alert koyulacak (tepeye , position : fixed olarak)
//Çoklu silme yapılacak
//Seçim yaparken list lere animasyon eklenecek
