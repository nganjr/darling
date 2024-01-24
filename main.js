const container = document.getElementById("container");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
 function hideButtons() {
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
 }

 yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAHOOOOO!, see you on 14th of Febraury!";
    gif.src = "https://media1.tenor.com/m/FZfcPyYj1r4AAAAC/peach-goma-goma-peach.gif";
    hideButtons();
 });
   

 noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;



    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);


    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
 })