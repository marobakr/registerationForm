import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APPSCRIPT, CONNECTION_URL } from '../env/base';
import { IFormData } from '../interface/dataForm';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetService {
  constructor(private _httpClient: HttpClient) {}

  createSheet(dataForm: IFormData): Observable<IFormData> {
    return this._httpClient.post<IFormData>(`${CONNECTION_URL}`, {
      ...dataForm,
    });
  }
  callAppScriptMethod(data: IFormData): Observable<any> {
    return this._httpClient.post(APPSCRIPT, data);
  }
}
