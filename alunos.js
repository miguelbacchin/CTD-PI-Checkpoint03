//1º Crie um objeto aluno que tenha
function Aluno(nomeParam, qtFaltasParam, notasParam) {
    this.nome = nomeParam
    this.qtFaltas = qtFaltasParam
    this.notas = notasParam

//2º Criar metodos "calcular media" e "faltas"
    this.calcularMedia = function () {
        let media = 0
        for (i = 0; i < this.notas.length; i++) {
            media += this.notas[i]
        }
        return media / this.notas.length
    }
    this.faltas = function () {
        return this.qtFaltas + 1
    }
}
const aluno1 = new Aluno("Miguel", 7, [8, 8, 8, 8])
const aluno2 = new Aluno("Pedro", 1, [5, 4, 8, 80])
const aluno3 = new Aluno("Lucas", 60, [7.8])

module.exports = {
    listaALunos: [aluno1, aluno2, aluno3],
}