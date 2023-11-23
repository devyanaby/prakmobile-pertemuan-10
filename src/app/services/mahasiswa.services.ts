// src/app/services/mahasiswa.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {
  private apiUrl = 'http://localhost:3000/mahasiswa'; // Ganti sesuai dengan URL API Anda

  constructor(private http: HttpClient) { }

  getAllMahasiswa(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMahasiswaById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addMahasiswa(mahasiswa: any): Observable<any> {
    return this.http.post(this.apiUrl, mahasiswa);
  }

  updateMahasiswa(id: string, mahasiswa: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, mahasiswa);
  }

  deleteMahasiswa(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
