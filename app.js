const form = document.getElementById("todo-form");
const table = document.querySelector(".table");
const inputValue = document.querySelector("#task-input");
const taskDelete = document.querySelector('.task-delete')
const time = new Date();

const data = [
  {
    id: 1,
    title: "Create New Things",
    date: "22:00",
  },
  {
    id: 2,
    title: "Create New Things",
    date: "22:00",
  },
  {
    id: 3,
    title: "Create New Things",
    date: "22:00",
  },
];

const storageData = JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) :[]
console.log(storageData)

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

// adding task function
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = `${time.getHours()}:${time.getMinutes()}`;
    let id = data.length + 1;
    data.push({
      id: id,
      title: `${inputValue.value}`,
      date: `${date}`,
    });
  });
  
// deleting task function
taskDelete.addEventListener('click',() => {
    console.log('function worked')
})