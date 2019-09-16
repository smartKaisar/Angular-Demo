import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Question } from '../models/question';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl: string = 'http://localhost:8080/qa/questions';

  constructor(private http: HttpClient) { }

  // Get Todos
  getQuestion(): Observable<any> {
    console.log("here");
    return this.http.get<any>(this.baseUrl);
  }

  // Delete Todo
  deleteQuestion(question: Question): Observable<Question> {
    const url = `${this.baseUrl}/${question.id}`;
    return this.http.delete<Question>(url, httpOptions);
  }

  // Add Todo
  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.baseUrl, question, httpOptions);
  }

  updateQuestion(question: Question): Observable<Question> {
    const url = `${this.baseUrl}/${question.id}`;
    return this.http.put<Question>(url, question, httpOptions);
  }

  // Toggle Completed
  // toggleCompleted(todo: Question): Observable<any> {
  //   const url = `${this.baseUrl}/${todo.id}`;
  //   return this.http.put(url, todo, httpOptions);
  // }
}
