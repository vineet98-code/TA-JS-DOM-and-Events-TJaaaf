let inputText = document.querySelector('#text');
let root = document.querySelector('ul');

let allTodos = [
    {
        name : "kishor",
        isDone: false,
    },
    {
        name : "kishor",
        isDone: false,
    }
];


function handleInput(event){
    let value = event.target.value;
    
    if (event.keyCode === 13 && value !==""){
        let todo = {
            name: value,
            isDone: false
        };
        allTodos.push(todo);
        event.target.value ="";

        createUI(allTodos, root);
    }
     
}

function createUI(data=allTodos, root){
    root.innerHTML = "";
    data.forEach((todo,index) => {

    let li = document.createElement('li');
    
    let input = document.createElement("input");
    
    input.type = "checkbox";
    input.checked  = todo.isDone;
    // input.addEventListener('input', handleToogle);
    // input.setAttribute('data-id', index);


    let p = document.createElement("p");
    p.innerText = todo.name;

    let span = document.createElement("span");
    span.innerText = "❌";
    // span.setAttribute('data-id', index);

    // span.addEventListener('click', handleDelete)
    
    li.append(input, p, span);
    root.append(li);

    });
}

createUI(allTodos, root);

inputText.addEventListener("keyUp", handleInput);