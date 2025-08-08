
let haha=document.createElement("div")
haha.setAttribute("class","created")
haha.innerHTML="My name is <b>Muhammad Aswab Khalil</b>"
document.querySelector(".box").prepend(haha)


let neww=document.querySelector(".container")
neww.insertAdjacentHTML("beforeend","Hello Guyz...Tang peelo")



let heh=document.querySelector(".container")
let btn=document.createElement("button")
btn.textContent="Click"
heh.insertAdjacentElement("afterend",btn)

document.querySelector(".box").remove()


document.querySelector(".container").classList.add("yellow")