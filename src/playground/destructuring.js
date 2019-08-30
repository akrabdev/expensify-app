import { database } from "firebase";

//
// Object 
//

const Person = {
    name: 'Mike',
    age: 27,
    location: {
        city: 'London',
        temp: 16
    }
};

const {abc,cdf} = Person;   // : reName ,  = giving default

const {city, temp: temperatdeure } =  Person.location

console.log(`My name is ${firstName}`);

console.log(`temperature in ${city} is ${temperature}`)


//
// Array
//

const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];

const [itemName, ,meduimPrice] = item;

console.log(`A meduim ${itemName} costs ${meduimPrice}`);


