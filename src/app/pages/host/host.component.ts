import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IFormData } from '../../core/interface/dataForm';
import { FormDataService } from '../../core/service/formdata.service';
import { GoogleSheetService } from '../../core/service/google-sheet.service';
import { MainDesingFormComponent } from './../../shared/main-desing-form/main-desing-form.component';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [ReactiveFormsModule, MainDesingFormComponent],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
})
export class HostComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _FormDataService: FormDataService,
    private _googleSheetService: GoogleSheetService,
    private _httpClient: HttpClient
  ) {}
  registerFormHost: FormGroup = this.formBuilder.group({
    hostFullName: ['', Validators.required],
    hostCompany: ['', Validators.required],
    hostJopTitle: ['', Validators.required],
    hostPhone: [null, Validators.required],
    hostEmail: ['', Validators.required],
  });
  qrCodeUrl: any = '';
  getAllDataForm: IFormData = {} as IFormData;
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
  backToPrevious(): void {
    this.router.navigate(['/visitor-data']);
  }
  onSubmit(registerFormHost: FormGroup) {
    if (registerFormHost.valid) {
      this.subscripFormData();
    } else {
      this.registerFormHost.markAllAsTouched();
    }
  }
  subscripFormData(): void {
    const currentData = this._FormDataService.formData.value;
    this._FormDataService.formData.next({
      ...currentData,
      ...this.registerFormHost.value,
    });

    this.insertInGoogleSheet();
  }

  insertInGoogleSheet(): void {
    let fullData: IFormData = {} as IFormData;
    this._FormDataService.formData.subscribe((next) => {
      fullData = next;
    });
    this._googleSheetService.createSheet(fullData).subscribe((next) => {
      this._googleSheetService.callAppScriptMethod(next).subscribe((data) => {
        console.log('done call APpscript', data);
      });
    });
  }
}
