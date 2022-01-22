import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/models/taskList';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: ITask[] = [];
  @Output() taskChecked: EventEmitter<ITask>

  constructor() { 
    this.taskChecked = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
