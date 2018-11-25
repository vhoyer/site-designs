import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Movie } from '../../interfaces/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies:Movie[];

  constructor
    ( private source:DataService
    , private response:ActivatedRoute
    , private router:Router
    ) { }

  ngOnInit() {
    this.response.queryParams.subscribe(data => {
      this.source.getSearchResult(data.q).subscribe(data => {
        this.movies = data.json().results;
      });
    });
  }
}
