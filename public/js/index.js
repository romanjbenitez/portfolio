let hidden = document.querySelectorAll('.hidden');

const scroll = () =>{
    let scrolltop = document.documentElement.scrollTop;
    for(let i = 0; i < hidden.length; i++){
        let top = hidden[i].offsetTop;
        if(top - 500 < scrolltop ){
            hidden[i].style.opacity = 1;
            hidden[i].classList.add("showtop")
        }
    }
}

let header = document.querySelector("#header")
const headershow = () => {
    let scrolltop = document.documentElement.scrollTop;
    let top = header.offsetTop
    if(top + 550 <= scrolltop){
        header.style.background = "#000000"
    }
    else{
        header.style.background = "rgba(0, 0, 0, 0.0001)"
    }
}

const nav = document.querySelector(".nav")

document.querySelector(".hamburger").addEventListener("click", e => {
  e.preventDefault()
  nav.style.opacity == 1 ? nav.style.opacity = 0 : nav.style.opacity = 1;
  if (nav.classList.contains("open")) {
    nav.classList.remove("open")
  } else {
    nav.classList.add("open")
  }
})


window.addEventListener('scroll' , scroll );
window.addEventListener('scroll' , headershow );

