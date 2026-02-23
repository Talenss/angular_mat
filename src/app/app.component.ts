import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegisterComponent],
  template: '<app-register></app-register>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_mat';
}
