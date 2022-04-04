import { PitchService } from './pitch.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.css']
})
export class PitchComponent implements OnInit {

  formulario!: FormGroup;

  listpitch!: Pitch[]
  constructor(
    private formBuider: FormBuilder,
    private service: PitchService
  ) { }

  ngOnInit(): void {
    this.listaPitch()
    this.formulario = this.formBuider.group({

      texto: ['', Validators.required],
  });

}


  listaPitch() {
    this.service.listaPitch()
      .subscribe(
        (data: any) => {
          this.listpitch = data
        },
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
    const { texto} = this.formulario.getRawValue()
    return {
      texto: texto
    }
  }

}

export interface Pitch {
  id?:number
  texto: string;

}
