import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserService) { }

  ngOnInit() {
  }

  //(traduzir tb)verificar motivo de não receber o retorno do submit, sem poder exibir toaster nem outra msg, porém o post funciona
  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        this.service.formModel.reset();
        //this.toastr.success('Usuário criado', 'Registro efetuado com sucesso');
      },
      err => {
        console.log(err);
      }
    );
  }
}
