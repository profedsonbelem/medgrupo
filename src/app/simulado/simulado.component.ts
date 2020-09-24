import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { MedService } from '../service/med-grupo.service';
import { MailService } from '../service/nodeMail.service';

@Component({
	selector: 'app-simulado',
	templateUrl: './simulado.component.html',
	styleUrls: ['./simulado.component.css']
})
export class SimuladoComponent implements OnInit {

	aluno: Aluno;
	alunos: Aluno[] = [];
	listaAlunos: Aluno[] = [];
	buscarPorEspecialidade: Aluno[] = [];
	buscarPorTurma: Aluno[] = [];
	buscarPorFilial: Aluno[] = [];
	buscarTeste: Aluno[] = [];

	public form: FormGroup;
	public search: FormGroup;

	public get especialidade(): AbstractControl {
		return this.form.get('especialidade').value;
	}

	public get filial(): AbstractControl {
		return this.form.get('filial').value;
	}
	public get turma(): AbstractControl {
		return this.form.get('turma').value;
	}

	public get matricula(): AbstractControl {
		return this.form.get('matricula').value;
	}

	public get email(): AbstractControl {
		return this.form.get('email').value;
	}



	seleciona: Aluno = new Aluno;

	dtOptions: any = {};


	constructor(private formBuilder: FormBuilder, private mailService: MailService, private serviceMed: MedService) {
		this.aluno = new Aluno();
	}

	ngOnInit() {
		this.listarTodos();
		this._initForm()

		this.dtOptions = {
			pagingType: 'full_numbers',
			dom: 'Bfrtip',
			displayLength: 10,
			buttons: [
				{ extend: 'copy', text: 'Copiar para Área de Trabalho' },
				{ extend: 'print', text: 'Imprimir' },
				{ extend: 'excel', text: 'Baixar planilha completa' },

			],
		};
	}

	private _initForm(): FormGroup {
		return this.form = this.formBuilder.group({
			especialidade: ['', Validators.required],
			nome: ['', Validators.required],
			filial: ['', Validators.required],
			turma: ['', Validators.required],
			matricula: [null],
			email: ['']
		})
	}


	public listarTodos() {
		
		this.serviceMed.findAll().subscribe(res => {
			this.listaAlunos = res;
			this.buscarPorEspecialidade = res;
			this.buscarPorFilial = res;
			this.buscarPorTurma = res;

 
		});
	}

	public listagemBuscaEspecialidade(selecionado) {
		if (selecionado == 'Especialidades - TODAS') {
			this.serviceMed.findAll().subscribe(res => {
				this.listaAlunos = res;
			});
		} else {
			this.serviceMed.findByEspecialidade(selecionado).subscribe(res => {
				this.listaAlunos = res
			})
		}
	}

	public listagemBuscaTurma(selecionado) {
		if (selecionado == 'Turmas - TODAS') {
			this.serviceMed.findAll().subscribe(res => {
				this.listaAlunos = res;
			});
		} else {
			this.serviceMed.findByTurma(selecionado).subscribe(res => {
				this.listaAlunos = res
			})
		}
	}

	public listagemBuscaFilial(selecionado) {
		if (selecionado == 'Filiais - TODAS') {
			this.serviceMed.findAll().subscribe(res => {
				this.listaAlunos = res;
			});
		} else {
			this.serviceMed.findByFilial(selecionado).subscribe(res => {
				this.listaAlunos = res
			})
		}
	}

	public listagemBuscaMatricula() {
		this.serviceMed.findByMatricula(this.matricula).subscribe(res => {
			this.listaAlunos = res
		})
	}

	public envioEmail() {
		this.mailService.envioEmail(this.email, this.listaAlunos).subscribe(data => {
			return data
		});
	}
}
