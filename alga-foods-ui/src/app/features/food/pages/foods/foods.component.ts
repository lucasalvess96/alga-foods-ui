import { Component } from '@angular/core';
import { materialModules } from '../../../../shared/angular-material/material-modules';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [materialModules],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.scss',
})
export class FoodsComponent {}
