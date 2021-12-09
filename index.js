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

faltas: function(nome){
    for(i =0; i < this.alunos.length; i++){
        if (this.alunos[i].nome == nome){
            this.alunos[i].faltas++
        }
        return this.alunos[i].faltas
    }     
}

let curso = {
    nomeDoCurso: 'DH Club',
    notaDeAprovacao: 8,
    faltasMaximas: 2,
    estudantes: alunos.alunos
}


ehAprovado: function(nome){
    for(i=0; i<this.estudantes.length; i++){
        if(this.estudantes[i].nome == nome){
            if(this.estudantes[i].faltas == this.faltasMaximas && alunos.calcularMedia(nome) >= this.notaDeAprovacao*1.1){
                return `O estudante ${nome} está aprovado`
            }
            else if(this.estudantes[i].faltas < this.faltasMaximas && alunos.calcularMedia(nome) >= this.notaDeAprovacao){
                return `O O estudante ${nome} está aprovado`
            }
            else{
                return `O O estudante ${nome} está reprovado`
            }
        }
    }
}

