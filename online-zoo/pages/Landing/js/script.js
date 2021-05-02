const parts =document.querySelectorAll('.part');
const switcher = document.querySelector('header .checkbox');
const donate =document.querySelectorAll('.formbtn');
const donend =document.querySelector('.donate-form-btn')
const burger =document.querySelectorAll('.burger');
const burgerM =document.querySelector('.BurgerUl');
const anaimalSlider1 =document.querySelectorAll('.animalsOnSlider ul li');
const input1 = document.querySelector('.ponzynokNull');
const output1 =document.querySelector('.counternull output' );

function switchteme () {
  if (switcher.checked){
    parts.forEach(parts =>  parts.classList.add("dark"))  
  }if (!switcher.checked){
    parts.forEach(parts =>  parts.classList.remove("dark"))  
  }
}
function donateform(){
document.querySelector('.form-page').classList.remove("displayNone")
}
function EndDonate(){
    document.querySelector('.form-page').classList.add("displayNone")  
 //   alert("Operation comleate. Thank You") 
}
function burgermenu(){
  if (burgerM.classList[2]=="activeB")  
  {burgerM.classList.remove("activeB")}
  else{burgerM.classList.add("activeB")}
}
function anaimalSlider1perehodPoClick(e){
  anaimalSlider1.forEach(anaimalSlider1 =>{
    anaimalSlider1.classList.remove("active")
    
  })
  e.path[1].classList.add("active")
  input1.value=e.path[1].value
  output1.value='0'+e.path[1].value
 
  let shift;

  if (window.screen.width < 640) {
    shift = 100;
  } else if (window.screen.width < 1920) {
    shift = 190;
  } else {
    shift = 166;
  }

  document.querySelector(".animalsOnSlider ul").style.transform = `translateX(-${(input1.value - 2) * shift}px)`;
    for (let i = 0; i < input1.value - 2; i++) {
      if (anaimalSlider1[i] && !anaimalSlider1[i].classList.contains("hide-slide")) {
        anaimalSlider1[i].classList.add("hide-slide");
      }
    }
   
    document.querySelector(".animalsOnSlider ul").style.transform = `translateX(${(2 - input1.value) * shift}px)`;
    for (let i = input1.value - 2; i < anaimalSlider1.length; i++) {
      if (anaimalSlider1[i] && anaimalSlider1[i].classList.contains("hide-slide")) {
        anaimalSlider1[i].classList.remove("hide-slide");
      }
    }
 


}



function slider1(){
  anaimalSlider1.forEach(anaimalSlider1 =>{
    anaimalSlider1.classList.remove("active")
  })
  anaimalSlider1[input1.value-1].classList.add("active")
  let shift;
  if (window.screen.width < 320) {
    shift = 152;
  } else  if (window.screen.width < 640) {
    shift = 122;
  } else if (window.screen.width < 1920) {
    shift = 190;
  } else {
    shift = 186;
  }


    document.querySelector(".animalsOnSlider ul").style.transform = `translateX(-${(input1.value - 2) * shift}px)`;
    for (let i = 0; i < input1.value - 2; i++) {
      if (anaimalSlider1[i] && !anaimalSlider1[i].classList.contains("hide-slide")) {
        anaimalSlider1[i].classList.add("hide-slide");
      }
    }
   
    document.querySelector(".animalsOnSlider ul").style.transform = `translateX(${(2 - input1.value) * shift}px)`;
    for (let i = input1.value - 2; i < anaimalSlider1.length; i++) {
      if (anaimalSlider1[i] && anaimalSlider1[i].classList.contains("hide-slide")) {
        anaimalSlider1[i].classList.remove("hide-slide");
      }
    }
  
}

input1.addEventListener('input',slider1)
anaimalSlider1.forEach((anaimalSlider1) => anaimalSlider1.addEventListener('click',anaimalSlider1perehodPoClick));
burger.forEach(burger => burger.addEventListener('click',burgermenu));
switcher.addEventListener('click',switchteme)
donate.forEach(donate => donate.addEventListener('click',donateform));
donend.addEventListener('click',EndDonate)