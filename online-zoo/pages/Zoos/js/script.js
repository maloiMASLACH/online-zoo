//Switcher
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


/// Donate
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

//Burger

const burger =document.querySelectorAll('.burger');
const burgerM =document.querySelector('.BurgerUl');


function burgermenu(){
  if (burgerM.classList[2]=="activeB")  
  {burgerM.classList.remove("activeB")}
  else{burgerM.classList.add("activeB")}
}

burger.forEach(burger => burger.addEventListener('click',burgermenu));

//slider



const frames= document.querySelectorAll('iframe')
const covers= document.querySelectorAll('.cover')
function video(e){
  console.log(e.path[0].id)
if(!e.path[0].classList.contains("main")){
  
  let vrem=frames[e.path[0].id].src
  frames[e.path[0].id].src=frames[0].src
  frames[0].src=vrem
}
}



covers.forEach(covers => covers.addEventListener('click',video))