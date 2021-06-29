let input = document.querySelector('#text');
let root = document.querySelector('.movie-list');

let allMovies  = [
    // {
    //     name : "Forest Gump",
    //     watched: true,
    // },
    // {
    //     name : "Inception",
    //     watched: false,
    // }
];


function handleInput(event){
    let value = event.target.value
    if (event.keyCode === 13 && value !==""){
        let movie = {
            name: value,
            isDone: false
        };
        allMovies.push(movie);
        value ="";

        createUI();
    }
}

function deleteMovie(event){
    // event.target.parentElement.remove();
    let id = event.target.dataset.id;
    allMovies.splice(id,1);
    createUI();
}

function toggleMovie(event){
    let id = event.target.id;
    allMovies[id].watched =  !allMovies[id].watched;
}

function createUI(){
    root.innerHTML = "";
    allMovies.forEach((movie, i) => {

    let li = document.createElement('li');
    
    let input = document.createElement("input");
    input.classList.add("style-checkbox");
    input.id = "1";
    
    input.type = "checkbox";
    input.checked  = movie.watched;
    input.setAttribute("data-id", i);
    input.addEventListener("change", toggleMovie);

    let p = document.createElement("p");
    p.innerText = movie.name;

    let span = document.createElement("span");
    span.innerText = "❌";
    span.setAttribute("data-id", i);
    span.addEventListener("click", deleteMovie);
    
    li.append(input, p, span);
    root.append(li);

    });
}

createUI();

input.addEventListener("keyup", handleInput);