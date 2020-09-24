export class Aluno {

    matricula: number;
    posicao: number;
    nota: number;
    especialidade: string;
    turma: string;
    filial: string;

    constructor(matricula?: number, posicao?: number, nota?: number,
               especialidade?: string, turma?: string, 
              filial?: string) {
        this.matricula = matricula;
        this.posicao = posicao;
        this.nota = nota;
        this.especialidade = especialidade;
        this.turma = turma;
        this.filial = filial;
    }
}