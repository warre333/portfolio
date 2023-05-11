// Calculate age
let age = new Date().getFullYear() - new Date("2005-08-19").getFullYear()
let months = new Date().getMonth() - new Date("2005-08-19").getMonth();

if (months < 0 || (months === 0 && new Date().getDate() < new Date("2005-08-19").getDate())) {
  age--;
}

module.exports = {
    age: age,
    studyingAt: "Busleyden Atheneum Zandpoort",
    studySubject: "InformaticaBeheer",
    studyYear: "6th",
}