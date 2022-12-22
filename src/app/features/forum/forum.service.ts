import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IPost, ITheme } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }

  getAllThemes() {
    return this.http.get<ITheme[]>(`${environment.baseUrl}/themes`);
  }

  getThemeById(themeId: string) {
    return this.http.get<ITheme>(`${environment.baseUrl}/themes/${themeId}`);
  }

  addTheme(title: string, content: string, authorId: string | undefined) {
    return this.http.post<ITheme>(`${environment.baseUrl}/themes`, {title, content, authorId}, { withCredentials: true });
  }

  postComment(themeId: string, comment: string, authorId: string | undefined) {
    return this.http.post<IPost>(`${environment.baseUrl}/themes/${themeId}/comments`, { themeId, comment, authorId }, { withCredentials: true });
  }
}
