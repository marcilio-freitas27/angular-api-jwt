import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Toast } from 'bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';
  mensagemErro = '';
  mensagemSucesso = '';
  result = false;
  toastTrigger: HTMLElement;
  toastLiveExample: HTMLElement;
  constructor(
    private loginService: LoginService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    this.toastTrigger = document.getElementById('liveToastBtn')
    this.toastLiveExample = document.getElementById('liveToast')
    if (this.toastTrigger) {
      this.toastTrigger.addEventListener('click', () => {
        const toast = new Toast(this.toastLiveExample)
        toast.show()
      })
    }
  }

  submit(): void{
    this.loginService
      .login(this.usuario, this.senha)
      .pipe()
      .subscribe({
        next: () => {
          this.result = true;
          this.route.navigate(['/']);
          this.mensagemSucesso = `Bem-vindo: ${this.usuario}, `;
          console.log(this.result)
        },
        error: () => {
          this.result = false;
          this.mensagemErro = `Usuario ou senha incorretos`;
          console.log(this.result)
        },
      });
  }
}
