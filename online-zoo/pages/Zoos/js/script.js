const parts =document.querySelectorAll('.part');
const switcher = document.querySelector('header .checkbox');
const donate =document.querySelectorAll('.formbtn');
const donend =document.querySelector('.donate-form-btn')

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
}



switcher.addEventListener('click',switchteme)
donate.forEach(donate => donate.addEventListener('click',donateform));
donend.addEventListener('click',EndDonate)