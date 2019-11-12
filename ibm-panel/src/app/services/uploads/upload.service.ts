import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

  upload(files: FileList) {
    const form = new FormData();
    form.append('file', files[0]);

    return this.http.post<{ url: string }>(`${environment.apiURL}/upload/lessons`, form);
  }
}
