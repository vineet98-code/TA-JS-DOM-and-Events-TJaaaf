
let ulRoot= document.querySelector(".todos");
let todoInput = document.querySelector('input');


let all = document.querySelector(".all");
let active = document.querySelector(".active");
let completed = document.querySelector(".completed");
let clear = document.querySelector(".clear");

// let defaultSelected = "all";

let activeButton = "all";


let allTodos = localStorage.getItem("todos") ?  JSON.parse(localStorage.getItem('todos')): [];

function addTodo(event){
    let value = event.target.value;

    if(event.keyCode === 13 && value !== ""){
        allTodos.push({
            name: value,
            isDone: false,
        });
        event.target.value ="";// to do it emppty in the box
        createUI();
    }
    localStorage.setItem('todos', JSON.stringify(allTodos));
}


function handleDelete(event) {
    let id = event.target.dataset.id;

    allTodos.splice(id,1);
    localStorage.setItem('todos', JSON.stringify(allTodos));
    createUI();
}

function handleToggle(event){
    let id = event.target.dataset.id;

    localStorage.setItem('todos', JSON.stringify(allTodos));
    allTodos[id].isDone = !allTodos[id].isDone;
    createUI();
}

function createUI(data = allTodos){
    ulRoot.innerHTML = "";
    data.forEach((todo, i) => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type = "checkBox";
        input.checked  = todo.isDone;
        input.setAttribute('data-id',i);
        input.addEventListener('input', handleToggle);
    
        let p = document.createElement('p');
        p.innerText = todo.name;
    
        let span = document.createElement('span');
        span.innerText  = "❌";
        span.setAttribute('data-id',i)
        span.addEventListener("click", handleDelete);

        li.append(input, p, span);
        ulRoot.append(li);
    });
}
createUI();


clear.addEventListener("click", () => {
    allTodos = allTodos.filter((todo) => !todo.isDone);
    createUI();
    localStorage.setItem('todos', JSON.stringify(allTodos));
});

active.addEventListener("click", () => {
    let notCompleted = allTodos.filter((todo) => !todo.isDone);
    createUI(notCompleted);
    activeButton ="active";
    
    updateActionButton();
});

completed.addEventListener("click", () =>{
    let CompletedTodos = allTodos.filter((todo) => todo.isDone);
    createUI(CompletedTodos);
    activeButton ="completed";
    updateActionButton();
});

all.addEventListener("click", () =>{
    createUI();
    activeButton ="all";
    updateActionButton();
});

function updateActionButton(btn = activeButton){
    all.classList.remove("selected");
    active.classList.remove("selected");
    completed.classList.remove("selected");

    if(btn === 'all') {
        all.classList.add("selected");
    }
    if(btn === 'active') {
        active.classList.add("selected");
    }
    if(btn === "completed"){
        completed.classList.add("selected");
    }
}
updateActionButton();


todoInput.addEventListener("keyup", addTodo);


