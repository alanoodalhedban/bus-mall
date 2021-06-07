'use strict';
let container = document.getElementById('one');
let limg = document.getElementById('lef-img');
let Mimg = document.getElementById('mid-img');
let rimg = document.getElementById('right-img');
let button = document.getElementById('buttonclick');

let lindex;
let Mindex;
let Rindex;

let rounds = 25;
let count = 0;
let arrOfNames = [];
let arrOfVotes = [];


function productImg(name, sourc) {
  this.name = name;
  this.sourc = sourc;
  this.vote = 0;
  this.nshown = 0;
  productImg.proImges.push(this);
  arrOfNames.push(this.name);
}
productImg.proImges = [];

new productImg('bage', 'img/bag.jpg');
new productImg('banana', 'img/banana.jpg');
new productImg('bathroom', 'img/bathroom.jpg');
new productImg('breakfast', 'img/breakfast.jpg');
new productImg('boots', 'img/boots.jpg');
new productImg('bubblegum', 'img/bubblegum.jpg');
new productImg('chair', 'img/chair.jpg');
new productImg('cthulhu', 'img/cthulhu.jpg');
new productImg('dog-duck', 'img/dog-duck.jpg');
new productImg('dragon', 'img/dragon.jpg');
new productImg('pen', 'img/pen.jpg');
new productImg('pet', 'img/pet-sweep.jpg');
new productImg('scissors', 'img/scissors.jpg');
new productImg('shark', 'img/shark.jpg');
new productImg('sweep', 'img/sweep.png');
new productImg('tauntaun', 'img/tauntaun.jpg');
new productImg('unicorn', 'img/unicorn.jpg');
new productImg('usb', 'img/usb.jpg');
new productImg('water', 'img/water-can.jpg');
new productImg('wine', 'img/wine-glass.jpg');
let plindex ,pmindex,prindex;
function display() {
  // lindex = Randomindex();
  // Mindex = Randomindex();
  // Rindex = Randomindex();

 
  lindex = Randomindex();
  while (lindex === plindex|| lindex === pmindex || lindex === prindex) {
    lindex = Randomindex();
   
  }
  

  Mindex=Randomindex();
  while (Mindex === plindex|| Mindex === pmindex || Mindex === prindex ||Mindex===lindex) {
    Mindex = Randomindex();
   
  }
  
  

  Rindex=Randomindex();
  while (Rindex === plindex|| Rindex === pmindex || Rindex === prindex||Rindex===lindex ||Rindex===Mindex) {
    Rindex = Randomindex();
   
  }
  prindex=Rindex;
  pmindex=Mindex;
  plindex=lindex;

  limg.setAttribute('src', productImg.proImges[lindex].sourc);
  productImg.proImges[lindex].nshown++;
  Mimg.setAttribute('src', productImg.proImges[Mindex].sourc);
  productImg.proImges[Mindex].nshown++;
  rimg.setAttribute('src', productImg.proImges[Rindex].sourc);
  productImg.proImges[Rindex].nshown++;

console.log(lindex,Mindex,Rindex);

}
display();

function Randomindex() {
  let rand = Math.floor(Math.random() * productImg.proImges.length);
  return rand;
}




// limg.addEventListener('click',clicking);
// Mimg.addEventListener('click',clicking);
// rimg.addEventListener('click',clicking);
container.addEventListener('click', clicking);




function clicking(event) {
  count++;
  if (rounds >= count) {
    if (event.target.id === 'lef-img') {
      productImg.proImges[lindex].vote++;
    } else if (event.target.id === 'mid-img') {
      productImg.proImges[Mindex].vote++;
    } else if (event.target.id === 'right-img') {
      productImg.proImges[Rindex].vote++;
    }
    display();

  }
  else {
    button.addEventListener('click', showlist);
  
    container.removeEventListener('click', clicking);


  }

}

let arrshown = [];

function showlist() {
  let ul = document.getElementById('unlist');
  for (let i = 0; i < productImg.proImges.length; i++) {
    arrOfVotes.push(productImg.proImges[i].vote);
    arrshown.push(productImg.proImges[i].nshown);
    let li = document.createElement('li');
   
    ul.appendChild(li);
    li.textContent = `${productImg.proImges[i].name} had ${productImg.proImges[i].vote} votes,and was seen ${productImg.proImges[i].nshown} times`;
  }
  newChart();
}


function newChart() {
  console.log(arrshown +'test');
  console.log(arrOfVotes+'test');
  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: arrOfNames,
      datasets: [{
        label: '# of Votes',
        data: arrOfVotes,
        backgroundColor: [
          'rgb(255, 127, 80)',
        ],
        borderWidth: 1
      }, {
        label: '# of show',
        data: arrshown,
        backgroundColor: [
          'rgb(189, 183, 107)',
        ],
        borderWidth: 1
      }
      ]
    },
  });
}









