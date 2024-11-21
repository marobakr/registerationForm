import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MainDesingFormComponent } from './../../shared/main-desing-form/main-desing-form.component';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [ReactiveFormsModule, MainDesingFormComponent],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
})
export class HostComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  @Output() isHostFillAllData: EventEmitter<boolean> = new EventEmitter();
  registerFormHost: FormGroup = this.formBuilder.group({
    hostFullName: ['', Validators.required],
    hostCompany: ['', Validators.required],
    hostJopTitle: ['', Validators.required],
    hostPhone: ['', Validators.required],
    hostEmail: ['', Validators.required],
  });
  get hostFullName() {
    return this.registerFormHost.get('visitorfullName');
  }

  get hostCompany() {
    return this.registerFormHost.get('hostCompany');
  }
  get hostJopTitle() {
    return this.registerFormHost.get('hostJopTitle');
  }
  get hostPhone() {
    return this.registerFormHost.get('hostPhone');
  }
  get hostEmail() {
    return this.registerFormHost.get('hostEmail');
  }

  emitValue(value: boolean): void {
    this.isHostFillAllData.emit(value);
  }
  backToPrevious(): void {
    this.router.navigate(['/visitor-data']);
  }
  onSubmit(registerFormHost: FormGroup) {
    if (!registerFormHost.valid) {
      this.registerFormHost.markAllAsTouched();
    }
    console.log(registerFormHost.value);
  }
}
