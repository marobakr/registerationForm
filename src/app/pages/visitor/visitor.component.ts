import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MainDesingFormComponent } from '../../shared/main-desing-form/main-desing-form.component';

@Component({
  selector: 'app-visitor',
  standalone: true,
  imports: [MainDesingFormComponent, ReactiveFormsModule],
  templateUrl: './visitor.component.html',
  styleUrl: './visitor.component.scss',
})
export class VisitorComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  @Output() isVisitorFillAllData: EventEmitter<boolean> = new EventEmitter();
  registerFormVisitor: FormGroup = this.formBuilder.group({
    visitorfullName: ['', Validators.required],
    visitorId: ['', Validators.required],
    visitorCompany: ['', Validators.required],
    visitorVehicleLetters: ['', Validators.required],
    visitorVehicleNumbers: ['', Validators.required],
    visitorPhone: ['', Validators.required],
    visitorEmail: ['', Validators.required],
  });
  get visitorfullName() {
    return this.registerFormVisitor.get('visitorfullName');
  }
  get visitorId() {
    return this.registerFormVisitor.get('visitorId');
  }
  get visitorCompany() {
    return this.registerFormVisitor.get('visitorCompany');
  }
  get visitorVehicleLetters() {
    return this.registerFormVisitor.get('visitorVehicleLetters');
  }
  get visitorVehicleNumbers() {
    return this.registerFormVisitor.get('visitorVehicleNumbers');
  }
  get visitorPhone() {
    return this.registerFormVisitor.get('visitorPhone');
  }
  get visitorEmail() {
    return this.registerFormVisitor.get('visitorEmail');
  }

  isFormValidGoNext(value: boolean): void {
    if (value) {
      this.router.navigate(['/host-data']);
    }
  }
  backToPrevious(): void {
    this.router.navigate(['/visit-data']);
  }
  onSubmit(registerFormVisitor: FormGroup) {
    if (!registerFormVisitor.valid) {
      this.registerFormVisitor.markAllAsTouched();
    }
    console.log(registerFormVisitor.value);
  }
}
