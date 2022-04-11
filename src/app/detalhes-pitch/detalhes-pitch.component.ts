
import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Pitch } from './../model/pitch';

@Component({
  selector: 'app-detalhes-pitch',
  templateUrl: './detalhes-pitch.component.html',
  styleUrls: ['./detalhes-pitch.component.css']
})
export class DetalhesPitchComponent implements OnInit {

  formulario!: FormGroup;
  pitch!: Pitch
    constructor(
      private formBuilder: FormBuilder,
      public dialogRef: MatDialogRef<DetalhesPitchComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Pitch)
    { }
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
    console.log(this.data)
    this.formulario = this.formBuilder.group({
      // nome:[{value: this.data.startup.nome, disabled: true}]
      nome:[this.data.startup.nome],
      local:[this.data.startup.local],
      funcionarios:[this.data.startup.funcionarios],
      textoPitch:[this.data.textoPitch],
      serie_investimento:[this.data.serie_investimento],
    })
  }

}
