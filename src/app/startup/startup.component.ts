import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StartupService } from './startup.service';
import { Startup } from '../model/startup';


@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

  formulario!: FormGroup;

  liststartup!: Startup[];
  constructor(
    private formBuider: FormBuilder,
    private service: StartupService
  ) { }

  ngOnInit(): void {
    this.listaStartup()
    this.formulario = this.formBuider.group({

      nome: ['', Validators.required],
      local: [null],
      funcionarios:[null],

  });

}
//fução pra testar API
listaStartup() {
  this.service.listaStartup()
    .subscribe(
      (data: any) => {
        this.liststartup = data
      },
      error => {
        console.log(error)
      }

    );

  }


  OnSubmit() {

    const Startup = this.montarStartup()
    if (this.validaCampos()) {
      this.service.salvarStartup(Startup)
        .subscribe(
          data => {
            console.log("Foi")
            alert("Salvo")
            this.limparCampos()
            this.listaStartup()

          },
          error => {
            console.log(error)
          }
        )
    } else {
      alert("campos invalidos")
      console.log(this.formulario)
    }
  }

  limparCampos():void{
    this.formulario.get('nome')!.setValue('')
    this.formulario.get('funcionarios')!.setValue('')
    this.formulario.get('local')!.setValue('') }

  validaCampos(): boolean {
    return this.formulario.valid ? true : false

  }

  montarStartup(): Startup {
    const { nome, local, funcionarios} = this.formulario.getRawValue()
    return {
      nome: nome,
      local: local,
      funcionarios:funcionarios

    }
  }}
