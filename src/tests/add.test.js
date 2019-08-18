/*
test.js  file format : 
function :
*/
const add =(a,b) => a + b + 1;

/* 

using global provided by jest : test() takes two arguments : a string (describing the test) 2. function testing the
function tested, checking on the function return using conditional logic if unexpected result : throw Error 

*/

test('should add two number',() =>{
    const result = add(3,4);

    if(result !== 7){
        throw new Error(`You added 3 and 4. The result was ${result}. Expect 7` );
    }
});