import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // listaHome = [{"cod":1, "descricao":"Startup"},
  //  {"cod":1, "descricao":"Startup"},
  //   {"cod":2, "descricao":"Pitch"},

  // ]
  formulario!: FormGroup;
  modoExibicao:boolean = false;
  constructor(
    private formBuider: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuider.group({

      local: ['', Validators.required],
      serie_investimento: ['', Validators.required],
      funcionarios: [1, Validators.required],
  });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) ;
    }

    return value;
  }

  goToInvest(){
    this.router.navigate(['pitch']);
  }

  goToStartup(){
    this.router.navigate(['startup']);
  }

}
