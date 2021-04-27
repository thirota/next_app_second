
const foo = ((...param)=>{
    console.log("param: " + param)
    console.log("param[0]: " + param[0])
    console.log("param[1]: " + param[1])
    let array=param[0]
    console.log("array " + array)
    console.log("array[0] " + array[0])
    console.log("array[0] " + array[1])
    let re=0;
    for(let i in param) {
        console.log("i: " + i)
        console.log("param[i]: " + param[i])
        re += param[i]*1
    }
    console.log("result: " + re)
    return re
})

//const array = ["1","2","3"]
const array = [1,2,3]

const result = foo(array);

// console.log("param: " + array)
// for (let i in array) {
//     console.log("item: " + array[i])
// }

console.log("result: " + result)