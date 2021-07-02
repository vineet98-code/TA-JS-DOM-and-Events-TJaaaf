let userRoot = document.querySelector(".user-icons")

let computerRoot = document.querySelector(".computer-icons");

let result = document.querySelector(".result");

let reset = document.querySelector(".refresh");

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Scissors


//<li>
//  <i class="fa fa-hand-rock-o" aria-hidden="true"></i>
//</li> 

let dataSet =[

    {
        name : "rock",
        beats : "Scissors",
    },
    {
        name: "scissors",
        beats: "paper",
    },
    {
        name: "paper",
        beats: "rock",
    },
    
];

let userSelected = {},
computerSelected = {};

function getWinner(user, computer) {
    // tie
    if(user.name === computer.name){
        result.innerText = "It's a Tie";
        result.style.color = "Red";
        result.style.fontSize = "40px";
    } else if(user.beats === computer.name) {
        result.innerText = "User Wins";
        result.style.color = "Green";
        result.style.fontSize = "40px";
    } else {
        result.innerText  = "Computer Wins"
        result.style.color = "Orange";
        result.style.fontSize = "40px";
    }
}

function getRandomNumber(max = 3) {
    return Math.floor(Math.random() * max);
}

function createUserLayout(){
    userRoot.innerHTML = "";
    dataSet.forEach((icon) => {

   let li = document.createElement("li");
   let i = document.createElement('i');
   i.className = `fa fa-hand-${icon.name}-o`;

   if(userSelected.name === icon.name) {
       li.classList.add("selected");
   }

   li.addEventListener('click', () => {
        userSelected = icon;

        computerSelected = dataSet[getRandomNumber()];

        getWinner(userSelected, computerSelected);

        createComputerLayout();
        createUserLayout();

        console.log(userSelected, computerSelected);
   });
   
   li.append(i);
   userRoot.append(li);
  });
}
createUserLayout();


function createComputerLayout(){
    computerRoot.innerHTML = "";
    dataSet.forEach((icon) =>{

   let li = document.createElement("li");
   let i = document.createElement('i');

   if(computerSelected.name === icon.name) {
    li.classList.add("selected");
}

   i.className = `fa fa-hand-${icon.name}-o`;
   li.append(i);
   computerRoot.append(li);
  });
}
createComputerLayout();

reset.addEventListener("click" , () => {
     userSelected = {};
     computerSelected = {};
     createUserLayout();
     createComputerLayout();
});
