'use strict';
let limg=document.getElementById('lef-img');
let Mimg=document.getElementById('mid-img');
let rimg=document.getElementById('right-img');
let button=document.getElementById('buttonclick');

let lindex;
let Mindex;
let Rindex;

let rounds=25 ;
let count=0;
let nshown=0;

function productImg(name,sourc){
  this.name=name;
  this.sourc=sourc;
  this.vote=0;
  
  productImg.proImges.push(this);
}
productImg.proImges=[];

new productImg('bage','img/bag.jpg');
new productImg('banana','img/banana.jpg');
new productImg('bathroom','img/bathroom.jpg');
new productImg('breakfast','img/breakfast.jpg');
new productImg('boots','img/boots.jpg');
new productImg('bubblegum','img/bubblegum.jpg');
new productImg('chair','img/chair.jpg');
new productImg('cthulhu','img/cthulhu.jpg');
new productImg('dog-duck','img/dog-duck.jpg');
new productImg('dragon','img/dragon.jpg');
new productImg('pen','img/pen.jpg');
new productImg('pet','img/pet-sweep.jpg');
new productImg('scissors','img/scissors.jpg');
new productImg('shark','img/shark.jpg');
new productImg('sweep','img/sweep.png');
new productImg('tauntaun','img/tauntaun.jpg');
new productImg('unicorn','img/unicorn.jpg');
new productImg('usb','img/usb.jpg');
new productImg('water','img/water-can.jpg');
new productImg('wine','img/wine-glass.jpg');

function display(){
  lindex=Randomindex();
  Mindex=Randomindex();
  Rindex=Randomindex();
  while(lindex===Mindex ||lindex===Rindex || Mindex=== Rindex){
    lindex=Randomindex();
    Mindex=Randomindex();


  }
  limg.setAttribute('src',productImg.proImges[lindex].sourc);
  Mimg.setAttribute('src',productImg.proImges[Mindex].sourc);
  rimg.setAttribute('src',productImg.proImges[Rindex].sourc);

}
display();

function Randomindex(){
  let rand=Math.floor(Math.random() *productImg.proImges.length );
  return rand;
}
limg.addEventListener('click',clicking);
Mimg.addEventListener('click',clicking);
rimg.addEventListener('click',clicking);

function clicking(event){
  count++;
  if (rounds >=count){
    if(event.target.id==='lef-img'){
      productImg.proImges[lindex].vote++;
    }else if(event.target.id==='mid-img'){
      productImg.proImges[Mindex].vote++;
    }else if(event.target.id==='right-img'){
      productImg.proImges[Rindex].vote++;
    }
    display();
    nshown++;


  }
  else{
    button.addEventListener('click',showlist);
    limg.removeEventListener('click',clicking);
    Mimg.removeEventListener('click',clicking);
    rimg.removeEventListener('click',clicking);


  }

}
function showlist(){
  let ul=document.getElementById('unlist');
  for(let i=0;i<productImg.proImges.length;i++){
    let li=document.createElement('li');
    ul.appendChild(li);
    li.textContent=`${productImg.proImges[i].name} had ${productImg.proImges[i].vote} votes,and was seen ${nshown} times`;
  }
}








