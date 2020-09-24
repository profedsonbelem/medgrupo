import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Aluno } from '../model/aluno';
import { MedService } from '../service/med-grupo.service';
import { SimuladoComponent } from './simulado.component';



xdescribe('Test AppComponent', () => {
  let service :MedService;
  let aluno :Aluno;
  let alunos =[
    {
      "posicao": 1,
      "nota":42,
      "matricula": 897413,
      "especialidade": "Clinica Medica",
      "turma": "2008 MEDCURSO SALVADOR - turma A/2008 MED SALVADOR",
      "filial":"Salvador(BA)"
    },
    {
      "posicao": 2,
      "nota":40,
      "matricula": 745133,
      "especialidade": "Cirurgia Geral",
      "turma": "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
      "filial":"São Paulo(SP)"
    },
    {
      "posicao": 2,
      "nota":40,
      "matricula": 897413,
      "especialidade": "Clinica Medica",
      "turma": "2008 MEDCURSO SALVADOR - turma A/2008 MED SALVADOR",
      "filial":"Salvador(BA)"
    },
    {
      "posicao": 3,
      "nota":39,
      "matricula": 745133,
      "especialidade": "Cirurgia Geral",
      "turma": "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
      "filial":"São Paulo(SP)"
    },
    {
      "posicao": 4,
      "nota":38,
      "matricula": 897413,
      "especialidade": "Clinica Medica",
      "turma": "2008 MEDCURSO SALVADOR - turma A/2008 MED SALVADOR",
      "filial":"Salvador(BA)"
    },
    {
      "posicao": 4,
      "nota":34,
      "matricula": 745133,
      "especialidade": "Cirurgia Geral",
      "turma": "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
      "filial":"São Paulo(SP)"
    },
    {
      "posicao": 5,
      "nota":35,
      "matricula": 745136,
      "especialidade": "Cirurgia Geral",
      "turma": "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
      "filial":"São Paulo(SP)"
    },
    {
      "posicao": 5,
      "nota":35,
      "matricula": 745136,
      "especialidade": "Cirurgia Geral",
      "turma": "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
      "filial":"São Paulo(SP)"
    },
    {
      "posicao": 6,
      "nota":37,
      "matricula": 745137,
      "especialidade": "Cirurgia Geral",
      "turma": "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
      "filial":"São Paulo(SP)"
    },
    {
      "posicao": 7,
      "nota":38,
      "matricula": 745147,
      "especialidade": "Cirurgia Geral",
      "turma": "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
      "filial":"São Paulo(SP)"
    },
    {
    "posicao": 7,
    "nota":39,
    "matricula": 745148,
    "especialidade": "Cirurgia Geral",
    "turma": "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
    "filial":"São Paulo(SP)"
    },
    {
    "posicao": 8,
    "nota":39,
    "matricula": 745149,
    "especialidade": "Cirurgia Geral",
    "turma": "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
    "filial":"São Paulo(SP)"
    }];
    
    
    
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers : [MedService]
    }).compileComponents();
     
    this.service =  TestBed.get(MedService);
     aluno = new Aluno(10,1,9,"especialista","turma 1","Rio de Janeiro");
      
  }));



 
	it('Test Objeto Service Aluno', () => {
		expect(this.service).toBeTruthy();
		console.log('Teste de Criacao do servico');
	})

	it('Test Quantidade de Alunos', () => {
		expect(10).toBe(this.alunos.length);
		console.log('Quantidade de Alunos', this.alunos.length);
	})

	it('Test Object Aluno', () => {
		expect(this.aluno).toBeTruthy();
		console.log('Teste de Objeto Aluno');
	});

  
  it('Test Object Aluno', () => {
     
    this.service.findByMatricula(897413).subscribe(res=>{
      this.aluno = res; 
    });
    
    expect(this.aluno).toBeTruthy();
		console.log('Teste de Objeto Aluno');
	});



 

});
