import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { materialModules } from '../../shared/angular-material/material-modules';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, materialModules],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
