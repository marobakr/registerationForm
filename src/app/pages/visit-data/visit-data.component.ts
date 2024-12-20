import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../../core/service/formdata.service';
import { MainDesingFormComponent } from '../../shared/main-desing-form/main-desing-form.component';

@Component({
  selector: 'app-visit-data',
  standalone: true,
  imports: [MainDesingFormComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './visit-data.component.html',
  styleUrl: './visit-data.component.scss',
})
export class VisitDataComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _formDataService: FormDataService
  ) {}
  @Output() ValidationOfVisitData: EventEmitter<boolean> = new EventEmitter();

  date: string = 'date of Visit';
  time: string = 'time of Visit';
  location: string = 'location of Visit';

  registerFormVisit: FormGroup = this.formBuilder.group({
    dateOfVisit: ['', Validators.required],
    startOfVisit: ['', Validators.required],
    locationOfVisit: ['', Validators.required],
    Notice: ['', Validators.required],
  });

  get dateOfVisit() {
    return this.registerFormVisit.get('dateOfVisit');
  }
  get startOfVisit() {
    return this.registerFormVisit.get('startOfVisit');
  }
  get locationOfVisit() {
    return this.registerFormVisit.get('locationOfVisit');
  }

  onSubmit(registerFormVisit: FormGroup) {
    if (!registerFormVisit.valid) {
      this.registerFormVisit.markAllAsTouched();
    }
  }

  insertVistoDataFrom(): void {
    const currentData = this._formDataService.formData.value;
    this._formDataService.formData.next({
      ...currentData,
      ...this.registerFormVisit.value,
    });
  }
  isFormValidGoNext(value: boolean): void {
    if (value) {
      this.insertVistoDataFrom();
      this.router.navigate(['/visitor-data']);
    }
  }
  clearForm() {
    this.registerFormVisit.reset();
  }
}
