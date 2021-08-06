import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndService: BackEndService) { }

  ngOnInit(): void {
  }
  onSave(){
    //this.backEndService.saveData(post)
    console.log("onSave() called!");
    this.backEndService.saveData();
  }
  onFetch(){
    console.log("onFetch() is called!");
    this.backEndService.fetchData();
  }

}
