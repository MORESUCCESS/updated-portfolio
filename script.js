let menu = document.getElementById('bars');
let header = document.querySelector('.header');
let themetoggler = document.getElementById('themes');
menu.onclick =() =>{
    menu.classList.toggle('fa-xmark');
    header.classList.toggle('active');
}

themetoggler.onclick =() =>{
    themetoggler.classList.toggle('fa-times');
    if( themetoggler.classList.toggle('fa-')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

// getting current year in the span (footer)
document.getElementById("year").textContent = new Date().getFullYear();


// Back to top btn

let backtpbtn = document.getElementById("backToTop");

window.onscroll = function () {
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > 500) {
        backtpbtn.style.display = "block";
    } else {
        backtpbtn.style.display = "none";
    }
};
