import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-minhas-solicitacoes',
  templateUrl: './minhas-solicitacoes.component.html',
  styleUrls: ['./minhas-solicitacoes.component.css']
})
export class MinhasSolicitacoesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickDetalhes(){
    this.router.navigate(['detalhe-servico']);
  }

}
