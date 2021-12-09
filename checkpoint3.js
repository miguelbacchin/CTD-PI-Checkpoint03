
let alunos = require('./Module/aluno')

let teste = alunos.novoAluno('teste',2,[1,2,3]);
alunos.alunos.push(teste);
console.log(teste);
console.log(alunos.alunos)
console.log(alunos.calcularMedia('Felipe'));