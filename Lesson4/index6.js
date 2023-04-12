const person ={
    name: "Vlad",
    salary: 5000,
};

function salaryIncrease(person) {
    return {
        name: person.name,
        salary: person.salary * 1.1,
    }
}

console.log(salaryIncrease(person));