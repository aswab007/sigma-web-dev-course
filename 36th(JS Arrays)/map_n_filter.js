let a1=[1,97,4,1,54,20]

let new_arr=a1.map((ele,index,arr) => {

    
 return ele*ele                               // map

})
console.log(new_arr)


let filtered_array=a1.filter((a1) => {

    return a1 >60


})
console.log(filtered_array)

const ab=(a,b)=>{
   return a+b
}

console.log(a1.reduce(ab))