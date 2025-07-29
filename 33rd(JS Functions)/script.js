function naam(namee){
    console.log("My name is "+namee+".")

}

naam("Aswab")
naam("Ali")



function sum(a,b){
    return a+b
}

result=sum(4,5)

console.log("The result of sum is ",result)


function is_even(number){
    if(number%2==0){
        return true
    }
    else{
        return false
    }
}

let res=is_even(5)
if(res==true){
    console.log("Even")
}
else{
    console.log("Odd")
}


const fun=(x)=>{
    console.log("Printed "+x+" using arrow function")

}

fun(20)
fun(25)

