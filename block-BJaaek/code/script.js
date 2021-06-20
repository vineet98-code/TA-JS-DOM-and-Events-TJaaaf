let first = document.querySelector('.first');

let second = document.querySelector('.second');


function random(number) {
  return Math.floor(Math.random() * (number+1));
}

first.addEventListener("mousemove", function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  first.style.backgroundColor = rndCol;
});

second.addEventListener("mousemove", function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    second.style.backgroundColor = rndCol;
  });
  
  