let search = document.querySelector('.searchBar');
let btn = document.querySelector('button');
let parentElm = document.querySelector('.mainBox');
let rootTags = document.querySelector('.tag');


let allPeople = got.houses.reduce((acc,cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);


let allTags = got.houses.map(house => house.name);

let activeHouse = "";

// layout representation

function createCards(data = []) {
    parentElm.innerHTML ="";
    data.forEach((person) => {
        let li = document.createElement('card');
        li.classList.add("card");
        
        let div = document.createElement('info');
        div.classList.add('info');

        let img = document.createElement('img');
        img.alt = person.image;
        img.src = person.image;

        let h2 = document.createElement('h2');
        h2.innerText = person.name;
        let p = document.createElement("p");
        p.innerText = person.description;
        let btn = document.createElement('button');
        btn.classList.add("btn");
        btn.innerText = "know More";

        div.append(img,h2);
        li.append(div, p, btn);
        parentElm.append(li);
    
    });
}

createCards(allPeople);


// button create layout
function createTagsUI(tags = []){
    rootTags.innerHTML="";
    tags.forEach((tag) => {
        let btn = document.createElement("button");
        btn.innerText = tag;
        if   (activeHouse === tag){
            btn.classList.add('active');
        }
        

        btn.addEventListener('click', () => {
            activeHouse = tags;
            let peopleOfTheHouse = got.houses.find(house => house.name === tag).people || [];
         createCards(peopleOfTheHouse);
         createTagsUI(allTags);

        });
        rootTags.append(btn);
    });
}

createTagsUI(allTags);

function searchBar(event){
 let searchText = event.target.value;
 let filteredPeople = allPeople.filter(p => p.name.toLowerCase().includes(searchText));
 createCards(filteredPeople);
}

search.addEventListener("keyup", searchBar);





