const persons = [
  {
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
  },
];

const bigger30AgePeople = persons.filter((person) => person.age > 30);
console.log(bigger30AgePeople)

const knowsJSPeople = persons.filter((person) => person.languages.includes("JavaScript"));
console.log(knowsJSPeople)
