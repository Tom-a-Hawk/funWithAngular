import { Component, OnInit } from '@angular/core';
import { TommydataService } from "./shared/tommydata.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng7';

  my_todo_list: any;

  constructor(private service: TommydataService) { }

  ngOnInit() {
    this.service.getTommyData().subscribe(data => {
      this.my_todo_list = data;
      this.title = "Got The Data"
      console.log(data)
    })
  }
}
