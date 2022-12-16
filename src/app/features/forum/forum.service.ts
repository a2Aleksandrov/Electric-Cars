import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  getAllThemes() {
    this.http.get(`${environment.baseUrl}/themes`);
  }

  getThemeById(themeId: string) {
    this.http.get(`${environment.baseUrl}/themes/${themeId}`);
  }

  addTheme() {
    this.http.post(`${environment.baseUrl}/themes`, {}, { withCredentials: true });
  }

  postComment() {
    this.http.post(`${environment.baseUrl}/theme/posts`, {}, { withCredentials: true });
  }
}
