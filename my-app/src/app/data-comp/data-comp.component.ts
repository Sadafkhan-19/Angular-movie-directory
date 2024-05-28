import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-comp',
  templateUrl: './data-comp.component.html',
  styleUrl: './data-comp.component.css'
})
export class DataCompComponent {
  movie: any;
  movieNames:string;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getMovie().subscribe(data => {
      this.movie = data;
      this.movieNames = data.Search;
      console.log(this.movie); 
      console.log(this.movieNames);
  });
}
}
