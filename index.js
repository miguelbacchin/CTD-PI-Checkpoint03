function Aluno(nome, faltas, notas) {
    this.nome = nome,
    this.faltas = faltas,
    this.notas = notas
};

let Felipe = new Aluno('Felipe', 4, [6,6,9]);
let Joana = new Aluno('Joana', 2, [3,4,5]);
let Mariana = new Aluno('Mariana', 1, [3,4,9]);
let Marlene = new Aluno('Marlene', 5, [3,4,7]);
let Jorge = new Aluno('Jorge', 0, [6,4,5]);

module.exports = {
    alunos:[Felipe, Joana, Mariana, Marlene, Jorge],
    novoAluno: function(nome, faltas, notas){
        const aluno = new Aluno(nome, faltas, notas);
        return aluno
    },
    calcularMedia: function(nome){
        let soma = 0;
        for(i =0; i < this.alunos.length; i++){
            if (this.alunos[i].nome == nome){
                for(nota of this.alunos[i].notas){
                    soma+=nota
                }
                return soma/this.alunos[i].notas.length
            }
        }
    },

};