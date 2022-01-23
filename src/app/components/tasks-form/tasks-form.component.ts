import { ITask } from 'src/app/models/taskList';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.css']
})
export class TasksFormComponent implements OnInit {
  @Output() taskAdded: EventEmitter<ITask>;

  public newTaskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.taskAdded = new EventEmitter();
    this.newTaskForm = {} as FormGroup;
  }

  ngOnInit(): void {
    this.newTaskForm = this.formBuilder.group({
      title: ["",  [Validators.required, Validators.minLength(3)]],
      completed: false
    })
  }

  public addTask(formValue: any): void {
    this.taskAdded.emit(formValue);
    this.newTaskForm.reset();
  }

  get title() {
    return this.newTaskForm.get('title');
  }

}
