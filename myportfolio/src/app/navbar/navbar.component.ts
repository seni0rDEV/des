import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  darkmodeService: DarkModeService = inject(DarkModeService);

  toggleDarkmode(){
    this.darkmodeService.updateDarkMode();
  }
}
