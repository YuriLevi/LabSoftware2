import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails;
  lat: string = '-23.8779431';
  lng: string = '-49.8046873';
  //zoom: string = '15';

  constructor(private router: Router, private service: UserService) { }

  //problema ao retornar detalhes do usuario, controller retorna porém não é acessível na tela.
  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
         this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}