import { NeighbourhoodService } from './../../services/hood/neighbourhood.service';
import { Neighbourhood } from './../../interfaces/neighbourhood';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  styleUrls: ['./neighbourhood.component.css']
})

export class NeighbourhoodComponent implements OnInit {
   

  // neighbourhood:Neighbourhood[]=[];
  neighbourhood:Neighbourhood={
    neighbourhood_name:'',
    location:'',
    occupants: '',
    admin: '',
  };
  submitted=false

  constructor(private neighbourhoodservice:NeighbourhoodService) {
  
   }
  ngOnInit(): void {
  }

  // findNeighbourhood() {
  //   this.neighbourhoodservice.fetchNeighbourhoodApi().subscribe(
  //     (res) => {
  //       this.neighbourhood = res

  //     }, error => {
  //       console.error(error)
  //     }
  //   );
  // }

  saveNeighbourhood():void{
    const data={
      neighbourhood_name: this.neighbourhood.neighbourhood_name,
      location: this.neighbourhood.location
    };

    this.neighbourhoodservice.create(data)
    .subscribe(
      response => {
        console.log(response)
        this.submitted = true;
      },
      error =>{
        console.log(error);
      }
    );
  }

  newNeighbourhood(): void{
    this.submitted=false;
    this.neighbourhood={
      neighbourhood_name:'',
      location:'',
      occupants: '', 
      admin:'',
    };
  }

}

