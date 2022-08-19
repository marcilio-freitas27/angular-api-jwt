import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';
import { UsuarioService } from './../usuario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dados: any;
  constructor(
    private usuario: UsuarioService,
    private router: Router,
    private loginService: LoginService
  ) {
    this.dados = '';
   }

  ngOnInit(): void {
    this.usuario.getClientes().subscribe({
      next: (retorno: any) => this.dados = retorno
    });
  }

  onLogoff(): void{
    if(this.loginService.logout()){
      this.router.navigate(['/login']);
    }
  }
}
