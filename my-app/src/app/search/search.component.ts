import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  results: any;

  constructor(private http: HttpClient) {}

  onSearch() {
    const apiUrl = `https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1=${this.query}`; // Replace with your actual API URL
    this.http.get(apiUrl).subscribe(
      data => {
        this.results = data;
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }
}
