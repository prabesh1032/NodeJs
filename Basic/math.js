// console.log("server");

// }
// const subb = (a, b) => {
//     return a - b;
// }
// console.log(add(12, 7));
// console.log(subb(12, 7));

// module.exports =add;
// module.exports =subb; 
// module.exports = {
//     add,
//     subb,
// };
//or we can directly make function with export.(exports.add or exports.subb)
// exports.multi=(a,b)=>{
//     return a*b;
// }

//es module
//defult export
const add = (a, b) => {//export default add
    return a + b;
}
const subb = (a, b) => {//export const subb
    return a - b;
}
const multi = (a, b) => {//export const multi
    return a * b;
}
export default add;
// export default subb; we can only use 1 function as defult export. this will cause error


//named export
export {
    subb,
    multi
};