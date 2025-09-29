import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { materialModules } from '../../shared/angular-material/material-modules';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, materialModules],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  title = 'alga-foods-ui 🍕🍔';
}
