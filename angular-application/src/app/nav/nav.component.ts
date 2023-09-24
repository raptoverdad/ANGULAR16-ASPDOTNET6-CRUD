import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  public token: any = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.token$.subscribe((token) => {
      this.token =token ;
    });
  }
}
