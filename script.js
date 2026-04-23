const title = document.querySelector("#title"); //selecting element h1
const paragraph = document.getElementsByTagName("p");
const button = document.getElementById("btn");
let link = document.querySelector("a")

title.textContent = "DOM manipulation started"
title.innerHTML = "<span> style='color:red' >Updated Title</span>"
title.innerText = "DOM manipulation with innerText" 

// inline style 
title.style.color = "blue" 
title.style.backgroundColor = "Light gray"
title.style.fontsize = "20px"
title.style.fontWeight = "bold"

// work with attributes 
link.setAttribute("href", "https://www.youtube.com/")
link.removeAttribute("href")

button.addEventListener("click", ()=>{
    title.textContent= "Text Changed";
    title.style.color="red"
    link.setAttribute=("href", "https://www.youtube.com/")
})