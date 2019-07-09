import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  apiData: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getInfo().subscribe(data => {
      this.apiData = JSON.stringify(data);
      console.log(JSON.stringify(data));
    });

  }

}
