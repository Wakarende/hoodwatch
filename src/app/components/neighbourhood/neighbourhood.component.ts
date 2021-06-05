import { NeighbourhoodService } from './../../services/hood/neighbourhood.service';
import { Neighbourhood } from './../../interfaces/neighbourhood';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  styleUrls: ['./neighbourhood.component.css']
})
export class NeighbourhoodComponent implements OnInit {

  neighbourhood:Neighbourhood[]=[];

  constructor(private neighbourhoodservice:NeighbourhoodService) { }

  findNeighbourhood() {
    this.neighbourhoodservice.fetchNeighbourhoodApi().subscribe(
      (res) => {
        this.neighbourhood = res

      }, error => {
        console.error(error)
      }
    );
  }
  ngOnInit(): void {
  }
}

