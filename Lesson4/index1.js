function creatPerson(name, age) {
    const person = {
        name: name,
        age: age,
    };

    return person;
}
const max = creatPerson('Max', 17);
console.log(max.name);
console.log(max.age);
