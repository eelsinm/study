const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input")
let todos = [];

function onInputTodo(event){
    event.preventDefault();
    console.log(`todoInput:${todoInput}`);
    console.dir(todoInput);
    const newTodo = todoInput.value;
    console.log(`newTodo:${newTodo}`);
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        ID: Date.now()
    };
    
    
    todos.push(newTodoObj);
    console.log(todos);
}

todoForm.addEventListener("submit", onInputTodo);