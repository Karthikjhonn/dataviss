import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  ngOnInit() {
    setInterval(() => {
      this.randomNumber(45, 224)
    }, 2000)
  }
  foods: any = [
    { value: 'steak-0', viewValue: 'Lab 1' },
    { value: 'pizza-1', viewValue: 'Lab 2' },
    { value: 'tacos-2', viewValue: 'Lab 3' },
  ];

  semiCircle: string[] = ['47', '100', '98', '210']


  randomNumber(minVal: number, maxVal: number) {
    for (let i = 0; i < 4; i++) {
      var randVal = minVal + (Math.random() * (maxVal - minVal));
      // console.log(Math.round(randVal));
      var roundValue =Math.round(randVal).toString();
      this.semiCircle[i]=roundValue
      
      // console.log(this.semiCircle);
      // return Math.round(randVal);
    }
   
    console.log(this.semiCircle);
    
  }

}
