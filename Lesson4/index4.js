const student1 = {
    name: "Max",
    language: 5,
    math: 8,
};
const student2 = {
    name: "Vlad",
    language: 7,
    math: 51,
};

function comparison(student1, student2) {
    if (((student1.language + student1.math) / 2) > ((student2.language + student2.math) / 2)){
        return `higher score ${student1.name}`;
    } else if (((student1.language + student1.math) / 2) < ((student2.language + student2.math) / 2)){
        return `higher score ${student2.name}`;
    }
}

console.log(comparison(student1, student2))