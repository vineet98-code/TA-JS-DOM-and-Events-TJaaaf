let form = document.querySelector('form');
let modal = document.querySelector(".modal_overlay");

let modalInfo = document.querySelector(".relative");

let userInfo =  {};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let elements = event.target.elements;

    userInfo.name = elements.name.value;
    userInfo.email = elements.email.value;

    userInfo.choice = elements.choice.value;
    userInfo.color = elements.color.value;

    userInfo.range = elements.range.value;
    
    userInfo.book = elements.book.value;
    userInfo.terms =elements.terms.checked;

    // console.log(userInfo);

    modal.classList.remove("close"); 

    
    let close = document.querySelector(".modal_close");
    close.addEventListener("click", () => {
        modal.classList.remove("open");
        modal.classList.add("close");
    });
    
    displayInfo(userInfo);
});

function displayInfo( data = {} ) {
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let email = document.createElement("h1");
    email.innerText = `${data.email}`;
    let choice = document.createElement("h1");
    choice.innerText = `${data.choice}`;
    let color = document.createElement("h1");
    color.innerText = `${data.color}`;
    let range = document.createElement("h1");
    range.innerText = `${data.range}`;
    let book = document.createElement("h1");
    book.innerText = `${data.book}`;
    let terms = document.createElement("h1");
    terms.innerText = ` ${data.terms}`;

    modalInfo.append(h1,email, choice, color, range, book, terms);
}


