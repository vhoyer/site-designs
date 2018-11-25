import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie:Movie;

  constructor
    ( private data:DataService
    , private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(req => {
      this.data.getData(req.id).subscribe(res => {
        this.movie = res.json();
      });
    });
  }

}
