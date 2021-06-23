let form = document.querySelector('form');

let userInfo =  {};

function handleSubmit(event) {
    event.preventDefault();

    userInfo.text = form.elements.name.value;
    userInfo.email = form.elements.name.value;

    userInfo.gender = form.elements.gender.value;
    userInfo.color = form.elements.color.value;

    userInfo.range = form.elements.range.value;
    
    userInfo.radio = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;
   
    console.log(userInfo);
}

form.addEventListener('submit', handleSubmit);
