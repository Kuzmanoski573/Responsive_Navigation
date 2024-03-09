let burger = document.querySelector('.burger-menu');
let navigacija = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    burger.classList.toggle("active");
    navigacija.classList.toggle('active');
});

let listitems = document.querySelectorAll('.list-items').forEach(n => n.addEventListener('click', ()=>{
    burger.classList.remove("active");
    navigacija.classList.remove('active');
}))