import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { MinhasSolicitacoesComponent } from './minhas-solicitacoes/minhas-solicitacoes.component';
import { DetalheServicoComponent } from './detalhe-servico/detalhe-servico.component';
import { HomePComponent } from './home-p/home-p.component';
import { AceitarSolicitacaoComponent } from './aceitar-solicitacao/aceitar-solicitacao.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'solicitacao',component:SolicitacaoComponent,canActivate:[AuthGuard]},
  {path:'minhas-solicitacoes',component:MinhasSolicitacoesComponent,canActivate:[AuthGuard]},
  {path:'detalhe-servico',component:DetalheServicoComponent,canActivate:[AuthGuard]},
  {path:'home-p',component:HomePComponent,canActivate:[AuthGuard]},
  {path:'aceitar-solicitacao',component:AceitarSolicitacaoComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }