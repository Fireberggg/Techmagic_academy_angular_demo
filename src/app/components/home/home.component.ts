import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/taskList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tabTitle: string = "Tasks List";
  public tasks: ITask[] = [
    { id: 1, description: "Learn Angular", done: false },
    { id: 2, description: "Read a book", done: true },
    { id: 3, description: "Do a workout", done: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public addTaskToList(taskName: string): void {
    this.tasks = [
      ...this.tasks,
      { description: taskName, done: false, id: Math.random() }
    ];
  }

  public checkTask(task: ITask) {
    this.tasks = this.tasks.map((existingTask) => {
      if (existingTask.id === task.id) {
        existingTask.done = !task.done;
      }

      return existingTask;
    });
  }

}
