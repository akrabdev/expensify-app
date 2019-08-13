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

const {name: firstName = "Anonymous", age} = Person;   // : reName ,  = giving default

const {city, temp: temperature } =  Person.location

console.log(`My name is ${firstName}`);

console.log(`temperature in ${city} is ${temperature}`)


//
// Array
//

const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];

const [itemName, ,meduimPrice] = item;

console.log(`A meduim ${itemName} costs ${meduimPrice}`);
