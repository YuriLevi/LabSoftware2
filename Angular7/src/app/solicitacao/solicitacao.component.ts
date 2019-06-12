import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
