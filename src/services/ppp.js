// let name = 'himanshu'

// function fun() {
//     return `my is ${name} yadav`
// }
// console.log(fun())

// function mul(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c
//         }
//     }
// }
// console.log("my number is ", mul(3)(3)(3))


///   element occurance
// const arr = [1, 1, 2, 3, 1, 4]
// const count = {};

// for (const ele of arr) {
//     if (count[ele]) {
//         count[ele] += 1;
//     } else {
//         count[ele] = 1;
//     }
// }
// console.log(count)

// const arr = [1, 2, 3, 4, 1, 2];
// const b = [];
// arr.filter((dup) => {
//     if (b.indexOf(arr[dup]) == -1) {
//         b.push(arr[dup])
//     }
// })
// console.log(b)

// for (let i = 0; i < arr.length; i++) {
//     if (b.indexOf(arr[i]) == -1) {
//         b.push(arr[i])
//     }

// }
// console.log(b)

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000)
// }

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000)
// }
// function mul(a, b) {
//     let answer = a;
//     for (let i = 1; i < b; i++) {
//         answer += a;
//     }
//     return answer;
// }
// console.log(mul(5, 5))
// const arr = [3, 24, 6, 2, 9]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr)

// var num = 4;
// function outer(num) {
//     var num = 2;
//     function inner() {
//         num++;
//         var num = 3;
//         console.log('num', num);
//     }
//     inner()
// }
// console.log(outer(num));
Array.prototype.mymap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i]));
    }
    return temp;
}


// const arr = [2, 3, 4, 5];

// const result = arr.mymap((num) => {
//     return num * 5;
// })
// console.log("result", result);