import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from '../interfaces/movie';
import { TMDbConfig } from '../interfaces/tmdb-config';

@Injectable({
  providedIn: 'root'
})
export class DataService implements TMDbConfig {
  images: { base_url: string; secure_base_url: string; backdrop_sizes: string[]; logo_sizes: string[]; poster_sizes: string[]; profile_sizes: string[]; still_sizes: string[]; };
  change_keys: string[];

  apiEndpoint:string = 'https://api.themoviedb.org/3/';
  apiKey:string = '6d132c5f70b936ab288082a9ca3522f1';

  constructor(public http:Http) {
    let raw = this.http.get(`https://api.themoviedb.org/3/configuration?api_key=${this.apiKey}`).toPromise();
    raw.then(data => {
      let json = data.json();
      this.images = json.images;
      this.change_keys = json.change_keys;
    });
  }

  getSearchResult(search){
    return this.http.get(`${this.apiEndpoint}search/movie?api_key=${this.apiKey}&query=${search}`);
  }

  getData(id){
    return this.http.get(`${this.apiEndpoint}movie/${id}?api_key=${this.apiKey}`);
  }

  getPosterPath(image: string, sizeIndex: number = 0): string {
    return `${this.images.secure_base_url}${this.images.poster_sizes[sizeIndex]}${image}`;
  }
}