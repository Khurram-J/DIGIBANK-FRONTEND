import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class signupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  stepCounter: any = 1;
  async StepUp() {
    this.stepCounter++;
  }
  async StepDown() {
    this.stepCounter--;
  }
  async Register(){
    
  }
}
