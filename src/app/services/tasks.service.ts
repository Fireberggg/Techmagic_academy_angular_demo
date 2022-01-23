import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from '../models/taskList';
import { mockedTasks } from '../utils/tasks-mock';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  public getTasks(): Observable<ITask[]> {
    return of(mockedTasks);
  }
}
