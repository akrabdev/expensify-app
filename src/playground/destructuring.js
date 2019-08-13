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