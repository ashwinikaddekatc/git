import { Component, OnInit } from '@angular/core';
import {SurefarmService} from 'src/app/services/api/surefarm.service';
@Component({
  selector: 'app-surefarm',
  templateUrl: './surefarm.component.html',
  styleUrls: ['./surefarm.component.scss']
})
export class SurefarmComponent implements OnInit {
  surefarm: any;
  port: Array<string>=[];

  constructor( private surefarmservice:SurefarmService) { }

  ngOnInit(): void {
    this.surefarmservice.getAll().subscribe((data) => {
      this.surefarm = data;
      console.log(data);
//port
    for (let i = 0; i < data.length; i++) {
      this.port.push(data[i]);
    }

    });
  }

}
