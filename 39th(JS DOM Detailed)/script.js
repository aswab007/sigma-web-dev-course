let boxx=document.getElementsByClassName("box")
boxx[2].style.backgroundColor="red"

document.getElementById("haha").style.backgroundColor="green"

document.querySelector(".box").style.backgroundColor="Yellow" //used for the first occurence of the specified class

let bex=document.querySelectorAll(".box")

for (let i = 0; i < bex.length; i++) {
    if(i%2==0){
    bex[i].style.backgroundColor="aqua"  
    }  
}

for (let i = 0; i < bex.length; i++) {
    if(i%2!=0){
    bex[i].style.backgroundColor="pink"  
    }  
}



