const createForm = document.getElementById("todo-form");
const table = document.querySelector(".table");
const taskDelete = document.querySelector(".task-delete");
const time = new Date();

let storageData = JSON.parse(localStorage.getItem("data"))
  ? JSON.parse(localStorage.getItem("data"))
  : [];

function setTodos() {
  localStorage.setItem("data", JSON.stringify(storageData));
}

storageData.map((item) => {
  table.innerHTML += `
 <div class="table-bottom">
            <p class="table-Id">${item.id}</p>
            <p class="Task-title">${item.title}</p>
            <p class="task-date">${item.date}</p>
            <p class="task-edit">Edit</p>
            <p class="task-delete">Delete</p>
        </div>
 `;
});
// localStorage.clear()
// adding task function
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskInput = createForm["task-input"].value.trim();
  const date = `${time.getHours()}:${time.getMinutes()}`;
  let id = storageData.length + 1;
  console.log(typeof taskInput)
  if (taskInput.length > 0) {
    let object = {
      id: id,
      title: taskInput,
      date: `${date}`,
      completed: false,
    };
    storageData.push(object);
    setTodos();
    window.location.reload();

  }
});

// // deleting task function
// taskDelete.addEventListener("click", () => {
//   console.log("function worked");
// });
