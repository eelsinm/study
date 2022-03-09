const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
let todos = [];
const TODOS_KEY = "todosK";

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text; 
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    
}

function onInputTodo(event){
    event.preventDefault();
    console.log(`todoInput:${todoInput}`);
    console.dir(todoInput);
    const newTodo = todoInput.value;
    console.log(`newTodo:${newTodo}`);
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    
    paintTodo(newTodoObj);
    todos.push(newTodoObj);
    saveTodos();
    console.log(todos);
}

todoForm.addEventListener("submit", onInputTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}