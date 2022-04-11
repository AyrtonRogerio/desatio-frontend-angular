



import { PitchService } from './pitch.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pitch } from '../model/pitch';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesPitchComponent } from '../detalhes-pitch/detalhes-pitch.component';


@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.css']
})
export class PitchComponent implements OnInit {

  formulario!: FormGroup;

  public series: string[] = [
    "", "A", "B", "C", "D"]
  modoExibicao:boolean = false;

  listpitch: Pitch[] =[];
  constructor(
    public dialog: MatDialog,
    private formBuider: FormBuilder,
    private service: PitchService
  ) { }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) ;
    }

    return value;
  }

  metodoClick(){}

  ngOnInit(): void {
    this.listaPitch()
    this.formulario = this.formBuider.group({

      local: ['', Validators.required],
      serie_investimento: ['', Validators.required],
      funcionarios: [1, Validators.required],
  });

}



    mostrarDetalhes(pitch: Pitch ): void {

      const dialogRef = this.dialog.open(DetalhesPitchComponent, {
        maxHeight: '160vh',
       minWidth: '460px',
        width: '60vw',
        data:pitch
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // window.location.reload();
      });

    }

  listaPitch() {
    this.service.listaPitch()
      .subscribe(
        (data: Pitch[]) => this.listpitch = data,
        error => {
          console.log(error)
        }

      );

    }


    listaPitchPersonalizado(){
      const { local, serie_investimento,funcionarios} = this.formulario.getRawValue()
      this.service.listaPitchsPersonalizado(local, serie_investimento , funcionarios).subscribe(
        (data: Pitch[]) => this.listpitch = data,
        error => {
          console.log(error)
        }
      );

    }

    OnSubmit() {

      const Pitch = this.montarPitch()
      if (this.validaCampos()) {
        this.service.salvarPitch(Pitch)
          .subscribe(
            data => {
              console.log("Foi")
              alert("Salvo")
              this.limparCampos()
              this.listaPitch()

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
      this.formulario.get('texto')!.setValue('')



    }

    validaCampos(): boolean {
      return this.formulario.valid ? true : false

    }

  montarPitch(): Pitch {
    const { texto, serie_investimento,startup} = this.formulario.getRawValue()
    return {
      textoPitch: texto,
      serie_investimento: serie_investimento,
      startup
    }
  }}
