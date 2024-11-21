import { Component } from '@angular/core';
import { HostComponent } from '../host/host.component';
import { VisitDataComponent } from '../visit-data/visit-data.component';
import { VisitorComponent } from '../visitor/visitor.component';

@Component({
  selector: 'app-final-form',
  standalone: true,
  imports: [VisitDataComponent, VisitorComponent, HostComponent],
  templateUrl: './final-form.component.html',
  styleUrl: './final-form.component.scss',
})
export class FinalFormComponent {
  isUserInsertVisitData: boolean = false;
  isUserInsertVisitorData: boolean = false;
  isUserInsertHostData: boolean = false;
}
