

// Switcher
const parts =document.querySelectorAll('.part');
const switcher = document.querySelector('header .checkbox');


function switchteme () {
  if (switcher.checked){
    parts.forEach(parts =>  parts.classList.add("dark"))  
  }if (!switcher.checked){
    parts.forEach(parts =>  parts.classList.remove("dark"))  
  }
}


switcher.addEventListener('click',switchteme)


// Donate

const donate =document.querySelectorAll('.formbtn');
const donend =document.querySelector('.donate-form-btn')

function donateform(){
document.querySelector('.form-page').classList.remove("displayNone")
}
function EndDonate(){
    document.querySelector('.form-page').classList.add("displayNone")   
}

donate.forEach(donate => donate.addEventListener('click',donateform));
donend.addEventListener('click',EndDonate)


// Burger
const burger =document.querySelectorAll('.burger');
const burgerM =document.querySelector('.BurgerUl');

function burgermenu(){
  if (burgerM.classList[2]=="activeB")  
  {burgerM.classList.remove("activeB")}
  else{burgerM.classList.add("activeB")}
}

burger.forEach(burger => burger.addEventListener('click',burgermenu));

//Slider
const thecondSlideIMG= document.querySelectorAll('.thecondSlider li.pet img')
const thecondSlide= document.querySelectorAll('.thecondSlider li.pet')
const input = document.querySelector('.ponzynokThird');
const output =document.querySelector('.thirdCounter output' );
const Arrows =document.querySelectorAll('.thecondSlider .arrow')

function thecondSlide2(){

  thecondSlide.forEach(thecondSlide =>{
    thecondSlide.classList.remove("activeimg")
  })
  thecondSlideIMG.forEach(thecondSlideIMG =>{
    thecondSlideIMG.classList.remove("activeimg")
  })
  let points=document.querySelectorAll('.point')
  points.forEach(points => points.classList.remove("act"))
  if(input.value<5){
  document.querySelector(`.mapPoint${input.value}`).classList.add("act")
}
  thecondSlide[input.value-1].classList.add("activeimg")
  thecondSlideIMG[input.value-1].classList.add("activeimg")


let k;
  if (window.screen.width >= 1920) {
    k=8;
    console.log(8)
  } else  if (window.screen.width >= 1200) {
    
    k=5;
  } else if (window.screen.width >=640) {
    k=3;
  } else {
    
  }if(k==5){
if(input.value<=k-1){
  for(let i=k;i<thecondSlide.length;i++){
    thecondSlide[i].classList.add("hide")
  }
  for(let i=0;i<k-1;i++){
    thecondSlide[i].classList.remove("hide")
  }
}
else{
  for(let i=k;i<thecondSlide.length;i++){
    thecondSlide[i].classList.remove("hide")
  }
  for(let i=thecondSlide.length-k-1;i>=0;i--){
    thecondSlide[i].classList.add("hide")
}
}
}
}

function sliderClick(e){
  thecondSlide.forEach(thecondSlide =>{
    thecondSlide.classList.remove("activeimg") 
  })
  thecondSlideIMG.forEach(thecondSlideIMG =>{
    thecondSlideIMG.classList.remove("activeimg") 
  })

  let points=document.querySelectorAll('.point')
  points.forEach(points => points.classList.remove("act"))
  if(input.value<5){
  document.querySelector(`.point${input.value}`).classList.add("act")
}

  if(e.path[1].classList.contains("left")){
    if (input.value==1){
      input.value=8;
    }else{
      input.value=input.value-1
    }
    thecondSlide[input.value-1].classList.add("activeimg")
    thecondSlideIMG[input.value-1].classList.add("activeimg")
  output.value='0'+input.value
  console.log(input.value)
}
console.log(e.path[1].classList)
if(e.path[1].classList.contains("right")){
if (input.value==8){
  input.value=1;
}else{
  input.value++
}
thecondSlide[input.value-1].classList.add("activeimg")
    thecondSlideIMG[input.value-1].classList.add("activeimg")

output.value='0'+input.value
console.log(input.value)
}

let k;
  if (window.screen.width >= 1920) {
    k=8;
    console.log(8)
  } else  if (window.screen.width >= 1200) {
    
    k=5;
  } else if (window.screen.width >=640) {
    k=3;
  } else {
    
  }if(k==5){
if(input.value<=k-1){
  for(let i=k;i<thecondSlide.length;i++){
    thecondSlide[i].classList.add("hide")
  }
  for(let i=0;i<k-1;i++){
    thecondSlide[i].classList.remove("hide")
  }
}
else{
  for(let i=k;i<thecondSlide.length;i++){
    thecondSlide[i].classList.remove("hide")
  }
  for(let i=thecondSlide.length-k-1;i>=0;i--){
    thecondSlide[i].classList.add("hide")
}
}
}



}

input.addEventListener('input',thecondSlide2)
Arrows.forEach(Arrows => Arrows.addEventListener('click',sliderClick))







