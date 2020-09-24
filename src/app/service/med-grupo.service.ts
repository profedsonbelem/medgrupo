import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Aluno } from '../model/aluno';


const URL = 'http://localhost:3000/alunos';
@Injectable()
export class MedService {

    constructor(private http: HttpClient) {
    }
    public findAll() {
        return this.http.get<Aluno[]>(`${URL}`);
    }
    public findByMatricula(matricula: any){
        console.log('serviceMatricula: ', matricula)
        return this.http.get<Aluno[]>(`${URL}?matricula=${matricula}`);
    }

    public findByEspecialidade(especialidade: string){
        return this.http.get<Aluno[]>(`${URL}?especialidade=${especialidade}`);
    }
    public findByFilial(filial: string){
        return this.http.get<Aluno[]>(`${URL}?filial=${filial}`);
    }
    public findByTurma(turma: string){
        return this.http.get<Aluno[]>(`${URL}?turma=${turma}`);
    }
}