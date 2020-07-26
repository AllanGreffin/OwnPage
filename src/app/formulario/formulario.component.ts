import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  FirstName: string = "";
  LastName: string= "";
  Email: string = "";
  ConfirmEmail: string = "";
  Senha: string = "";
  ConfirmaSenha: string ="";
  Cep: string = "";
  usuario: Usuario;

  constructor() {

   }

  ngOnInit(): void {
  }

  EnviarForm(){

    this.usuario = new Usuario(
      this.FirstName,
      this.LastName,
      this.Email,
      this.Senha
    );
    
    console.log(this.usuario);
  }
}
