
const btn = document.querySelector(".btn");

btn.addEventListener('mouseover', ()=> {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    btn.style.top = `${Math.floor(Math.random() * 80)+10}%`;
    btn.style.left = `${Math.floor(Math.random() * 80)+10}%`;
    btn.style.background=`#`+randomColor;
})

btn.addEventListener('click', ()=> {
    alert("You Won Loser")
})