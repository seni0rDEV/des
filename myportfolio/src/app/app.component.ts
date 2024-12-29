import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkModeService } from './services/dark-mode.service';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  darkmodeService: DarkModeService = inject(DarkModeService);
  title = 'des';
}
