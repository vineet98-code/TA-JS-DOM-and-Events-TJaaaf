function main(){
let inputText = document.querySelector("#text");
let root = document.querySelector("ul");

let allTodos = JSON.parse(localStorage.getItem('todos')) || [];


function handleInput(event){
    let value = event.target.value;

    if(event.keyCode === 13 && value !== "" ){
        let todo = {
            name : value,
            isDone: false,
        }
        allTodos.push(todo);
        event.target.value ="";// to do it emppty in the box
        createUI(allTodos, root);
    }
    localStorage.setItem('todos', JSON.stringify(allTodos));
}

function handleDelete(event) {
    let id = event.target.dataset.id;
    allTodos.splice(id,1);
    localStorage.setItem('todos', JSON.stringify(allTodos));
    createUI(allTodos, root);

}
function handleToggle(event){
    let id = event.target.dataset.id;
    localStorage.setItem('todos', JSON.stringify(allTodos));
    allTodos[id].isDone = !allTodos[id].isDone;
    createUI(allTodos,root);


}

function createUI(data, root){
    root.innerHTML = "";
    allTodos.forEach((todo,index) => {
        

        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type = "checkBox";
        input.checked  = todo.isDone;
        input.setAttribute('data-id',index);
        input.addEventListener('input', handleToggle);
    
        let p = document.createElement('p');
        p.innerText = todo.name;
    
        let span = document.createElement('span');
        span.innerText  = "x";
        span.setAttribute('data-id',index)
        span.addEventListener("click", handleDelete);

        li.append(input, p, span);
        root.append(li);
    });
}

createUI(allTodos, root);
inputText.addEventListener("keyup", handleInput);
}
main();
