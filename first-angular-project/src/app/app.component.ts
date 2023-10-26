import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('test', {static : true}) test: any;
  @ViewChild('test2', {static : true}) test2: any;

  ngOnInit() {
    this.test.nativeElement.value = 'Test';
    this.test2.nativeElement.value = 'Test_2';
  }
}
