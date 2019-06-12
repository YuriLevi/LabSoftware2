import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AgmCoreModule } from '@agm/core';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { ClientComponent } from './home/client/client.component';
import { PrestadorComponent } from './home/prestador/prestador.component';
import { MinhasSolicitacoesComponent } from './minhas-solicitacoes/minhas-solicitacoes.component';
import { DetalheServicoComponent } from './detalhe-servico/detalhe-servico.component';
import { HomePComponent } from './home-p/home-p.component';
import { AceitarSolicitacaoComponent } from './aceitar-solicitacao/aceitar-solicitacao.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    SolicitacaoComponent,
    ClientComponent,
    PrestadorComponent,
    MinhasSolicitacoesComponent,
    DetalheServicoComponent,
    HomePComponent,
    AceitarSolicitacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMkvA8dJAn2Yj6dzae2usmCiX5zavW6PI'
    }),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    FormsModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }