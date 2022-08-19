import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';
  mensagemErro = '';
  constructor(
    private loginService: LoginService,
    private route: Router,
    // private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  // showSuccess(mensagem: string) {
  //   this.toastr.success(mensagem);
  // }

  // showError(mensagem: string) {
  //   this.toastr.error(mensagem);
  // }

  submit(): void {
    this.loginService
      .login(this.usuario, this.senha)
      .pipe()
      .subscribe({
        next: () => {
          this.route.navigate(['/']);
        },
        error: () => {
          // this.showError(
          //   `Usuario ou senha incorretos. Usuario: ${this.usuario}, Senha: ${this.senha}`
          // );
          console.log(`Usuario ou senha incorretos. Usuario: ${this.usuario}, Senha: ${this.senha}`);
        },
      });
  }
}
