import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie:Movie;

  constructor(public data:DataService) { }

  ngOnInit() {
  }
}
