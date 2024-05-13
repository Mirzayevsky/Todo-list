const createForm = document.getElementById("todo-form");
const table = document.querySelector(".table");
const taskDelete = document.querySelector(".task-delete");
const time = new Date();
const editForm = document.getElementById('modal')
const overlay = document.querySelector('.overlay')
const closeModal = document.getElementById('modal-close')
let editItem 
let todoData = JSON.parse(localStorage.getItem("data"))
  ? JSON.parse(localStorage.getItem("data"))
  : [];

if(todoData.length){
  showTodos()
}

// set items inside localStorage
function setTodos() {
  localStorage.setItem("data", JSON.stringify(todoData));
}

// it returns error message
function showMessage (where,message) {
  const error = document.getElementById(`${where}`).value = message
  console.log(error)
  setTimeout(()=>{
  document.getElementById(`${where}`).value = ""
 },2000)
}


// adding loop tasks function
function showTodos () {
    const todos = JSON.parse(localStorage.getItem('data'))
    table.innerHTML  = ''
    todos?.forEach((item,i)=>{
    table.innerHTML += `
    <div class="table-bottom" >
    <p class="table-Id">${i}</p>
    <p class="Task-title">${item.title}</p>
    <p class="task-date">${item.date}</p>
    <div class="action-wrapper">
     <img onclick="editTask(${i})" src="./assets/icons/8666681_edit_icon.svg" class="task-edit-btn"/>
     <img  onclick="deleteItem(${i})"  src="./assets/icons/185090_delete_garbage_icon.svg" class="task-delete-btn"/>
     </div>
</div>
    `
  })
}

// add task function
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskInput = createForm["task-input"].value.trim();
  const date = `${time.getHours()}:${time.getMinutes()}`;
  let id = todoData.length + 1
  createForm.reset()
  if (taskInput.length) {
    todoData.push({
      id: id,
      title: taskInput,
      date: `${date}`,
      completed: false,
    });
    setTodos();
    showTodos()
  } else {
    showMessage('task-input','Pease enter text...')
  }
});



// edit function

function open(){
  overlay.classList.remove('hidden')
}
function close (){
  overlay.classList.add('hidden')
}

closeModal.addEventListener('click',() => {
 close()
})


function editTask(id) {
 editItem = id
 console.log(editItem)
 open()
}


editForm.addEventListener('submit',(e) => {
  e.preventDefault();
  const editInput = editForm["modal-input"].value.trim();
  const date = `${time.getHours()}:${time.getMinutes()} time:${time.getSeconds()}`;
  editForm.reset()
  if (editInput.length) {
    todoData.splice(editItem,1,{
      title:`${editInput}`,
      date:`${date}`,
      completed:false
    })
    
    setTodos()
    showTodos()
    close()

  } else {
    showMessage('modal-input','Edit Your Text')
  }
})

//delete task function



// // delete task function
function deleteItem(id){
  console.log(id)
 const deletedItems = todoData.filter((item,i)=>{
   return i !== id
 })
 
 todoData = deletedItems
 setTodos()
 showTodos()
}


// complete task  function
// const setCompleted = (id) => {
//   console.log(id)
//   const completedTasks  =  todoData.map((item) => {
//     if(item.id === id){
//       return {...item,completed: item.completed === true ? false : true}
//     }else{
//       return {...item}
//     }
//   })

//   todoData = completedTasks
//   setTodos()
//   showTodos()
  
// }

