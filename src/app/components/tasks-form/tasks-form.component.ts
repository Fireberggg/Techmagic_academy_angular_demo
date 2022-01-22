import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.css']
})
export class TasksFormComponent implements OnInit {
  @Output() taskAdded: EventEmitter<string>;

  public taskDescription: string = "";

  constructor() { 
    this.taskAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public addTask(): void {
    this.taskAdded.emit(this.taskDescription);
    this.taskDescription = "";
  }

}
