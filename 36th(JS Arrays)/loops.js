let a1 = [1, 97, 4, 10, 54, 20, 15];

for (let index = 0; index < a1.length; index++) {
  console.log(a1[index]);
}


a1.forEach((element,index,arr) => {  //dont get wrong w the order of parameters her...
                                     
    arr[index]=element*2            //Here,"arr" is referring to "a1"
    
});
console.log(a1)


