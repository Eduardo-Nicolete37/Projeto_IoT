let alunos = [
    {nome:"Platini", time:"Palmeiras"},
    {nome:"Kauan", time:"Corinthians"},
    {nome:"João", time:"SP"},
    {nome:"Felipe", time:"Santos"}
];

const time_procurado = "Platini";
const aluno_encontrado = alunos.find(s => s.time === time_procurado);
console.log(aluno_encontrado)