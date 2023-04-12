const person = {
    name:"Max",
    age: 19,
};

function checkVote(person) {
    if (person.age >= 18) {
        return `Welcome ${person.name}`;
    } else {
        return "Go away";
    };
}

console.log(checkVote(person));