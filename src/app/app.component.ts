import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { HeadrComponent } from './components/headr/headr.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, HeadrComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'registration-form';
}
