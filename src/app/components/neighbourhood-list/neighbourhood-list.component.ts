import { Neighbourhood } from './../../interfaces/neighbourhood';
import { NeighbourhoodService } from './../../services/hood/neighbourhood.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighbourhood-list',
  templateUrl: './neighbourhood-list.component.html',
  styleUrls: ['./neighbourhood-list.component.css']
})
export class NeighbourhoodListComponent implements OnInit {

  neighbourhood?: Neighbourhood[];
  currentNeighbourhood?: Neighbourhood;
  currentIndex = -1;
  post_name = '';

  constructor(private neighbourhoodservice:NeighbourhoodService) { }

  ngOnInit(): void {
    this.retrieveNeighbourhood();
  }

  retrieveNeighbourhood(): void {
    this.neighbourhoodservice.getAll()
      .subscribe(
        data => {
          this.neighbourhood = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveNeighbourhood();
    this.currentNeighbourhood = undefined;
    this.currentIndex = -1;
  }

  setActiveNeighbourhood(neighbourhood: Neighbourhood, index: number): void {
    this.currentNeighbourhood = neighbourhood;
    this.currentIndex = index;
  }

  removeAllNeighbourhoods(): void {
    this.neighbourhoodservice.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  // searchPost(): void {
  //   this.neighbourhoodservice.findByName(this.neighbourhood_name)
  //     .subscribe(
  //       data => {
  //         this.neighbourhood = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }




}
