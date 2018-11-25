import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  query:string = '';

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) {} 

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.query = data.q;
    });
  }

  onSearch(){
    this.router.navigate(['/list'], { queryParams: { 'q': this.query } })
  }
}
