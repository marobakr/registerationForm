import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-desing-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-desing-form.component.html',
  styleUrl: './main-desing-form.component.scss',
})
export class MainDesingFormComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: false }) description: string = '';
  @Input({ required: false }) firstInputInPage: boolean = false;
}
