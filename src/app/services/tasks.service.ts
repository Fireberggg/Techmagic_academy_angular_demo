import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from '../models/taskList';
import { mockedTasks } from '../utils/tasks-mock';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private apiEnpoint = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  public getTasks(limit: number = 10): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${this.apiEnpoint}?_limit=${limit}`);
  }
}
