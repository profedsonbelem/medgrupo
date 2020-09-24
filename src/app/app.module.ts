import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimuladoComponent } from './simulado/simulado.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { MedService } from './service/med-grupo.service';
import { MailService } from './service/nodeMail.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SimuladoService } from './service/simuladoservice';

@NgModule({
	declarations: [
		AppComponent,
		SimuladoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MDBBootstrapModule.forRoot(),
		BrowserAnimationsModule,
		DataTablesModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule

	],
	providers: [MedService,MailService, SimuladoService],  
	bootstrap: [AppComponent]
})
export class AppModule { }
