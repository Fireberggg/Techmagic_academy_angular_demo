import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tabTitle: string = "Tasks List";
  public taskDescription: string = "Make a coffee";

  constructor() { }

  ngOnInit(): void {
  }

}
