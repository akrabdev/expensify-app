/*
test.js  file format : 
function :
*/
const add =(a,b) => a + b;

const greeting = (name) => `Hello ${name}!`;

/* 

using global provided by jest : test() takes two arguments : a string (describing the test) 2. function testing the
function tested, checking on the function return using conditional logic if unexpected result : throw Error 

*/

test('should add two number',() =>{
    const result = add(3,4);

    expect(result).toBe(7);
});

test('greet user',()=>{
    const result = greeting('Mike');
    expect(result).toBe('Hello Mike!');
})