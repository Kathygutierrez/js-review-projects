//==== Todo CRUD MANAGEMENT ====

// Array to store todos
let todos = [];

//DOM ELEMENTS
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

//FUNCTIONS TO RENDER TODOS
function renderTodos() {
    todoList.innerHTML = ''; // CLEAR THE LIST
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className ='todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

//function to add a new todo
function addTodo(event) {
    event.preventDefault(); // prevent form submission
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = ''; //clear the input
        renderTodos();
    }
}

//FUNCTION TO EDIT A TODO
function editTodo(index) {
    const updatedTodo = prompt('Edit your todo:', todos[index]);
    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

//FUNCTION TO DELETE A TODO
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

//EVENTS LISTENER
todoForm.addEventListener('submit', addTodo);

//Initial render
renderTodos();