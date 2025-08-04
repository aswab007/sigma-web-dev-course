let a1=[1,97,4,1,54,20]
console.log(a1)
a1[6]="Aswab"
console.log(a1)
console.log(a1.length)
a1[2]="Muhammad"
console.log(a1)
console.log(typeof a1)
console.log(a1.toString())
let arr=a1
console.log(arr)
a1[3]="Ali"
console.log(arr)
console.log(a1.join("_"))
console.log(a1.pop())
console.log(arr)
arr.push("Aswab Khalil")
console.log(arr)
a1.shift()
console.log(a1)
arr.unshift(10)
console.log(arr)
console.log(a1)
delete(arr[1])
console.log(arr)
console.log(arr[1])
console.log(a1.concat(arr))
console.log(a1.sort())
console.log(a1)

a1.splice(10,"Muhammad","Aswab Khalil")
console.log(a1)



let a3="Aswab"
let a4=Array.from(a3)
console.log(a4)


for (const key in a1) {
    if (Object.prototype.hasOwnProperty.call(a1, key)) {       //"for in "is used to get the keys of array
        const element = a1[key];
        console.log(key)
    }
}

for (const element of a1) {          //"for of" is used for getting the values of array
    console.log(element)
}