import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumeDetails } from './resume-detail.model';


@Injectable()
export class ResumeBuilderService {

  private _baseUrl: string;

  constructor(private http: HttpClient) {
    this._baseUrl = environment.baseUrl;
  }

  public getStates(): Observable<string[]> {
    return this.http.get<string[]>(`${this._baseUrl}/states`);
  }

  public getCities(): Observable<string[]> {
    return this.http.get<string[]>(`${this._baseUrl}/cities`);
  }

  public saveResume(resumeDetails: ResumeDetails): Observable<ResumeDetails> {
    return this.http.post<ResumeDetails>(`${this._baseUrl}/resume`, resumeDetails);
  }
}
