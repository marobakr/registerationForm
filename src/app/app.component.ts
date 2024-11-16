import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HeadrComponent } from './components/headr/headr.component';
import { VisitComponent } from './pages/visit/visit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, VisitComponent, HeadrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'registration-form';
}
