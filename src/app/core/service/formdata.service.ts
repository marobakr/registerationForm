import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFormData } from '../interface/dataForm';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  formData: BehaviorSubject<IFormData> = new BehaviorSubject({} as IFormData);
  constructor() {}
}
