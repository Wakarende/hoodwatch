import { NeighbourhoodService } from './../../services/hood/neighbourhood.service';
import { Neighbourhood } from './../../interfaces/neighbourhood';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neighbourhood',
  templateUrl: './neighbourhood.component.html',
  styleUrls: ['./neighbourhood.component.css'],
  providers: [NeighbourhoodService]
})

export class NeighbourhoodComponent implements OnInit {
   

  neighbourhood?:Neighbourhood[];
  

  currentNeighbourhood?:Neighbourhood;
  currentIndex = -1;
  neighbourhood_name = '';

  constructor(private neighbourhoodservice:NeighbourhoodService) {
  
   }
  ngOnInit(): void {
    this.retrieveNeighbourhood();
  }

  findNeighbourhood() {
    this.neighbourhoodservice.fetchNeighbourhoodApi().subscribe(
      (res) => {
        this.neighbourhood = res

      }, error => {
        console.error(error)
      }
    );
  }
// create 
  onSubmit(neighbourhood:any){
    this.neighbourhoodservice.create(neighbourhood).subscribe((result) =>{
      console.warn("result",result)
    })
    console.warn(neighbourhood)
  }
// update 
  updateNeighbourhood(id:any, neighbourhood:Neighbourhood){
    this.neighbourhoodservice.update(id,neighbourhood).subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(id)
  }
  
  // delete 
  deleteNeighbourhood(id:any){
    this.neighbourhoodservice.delete(id).subscribe(
        response => {
          console.log(response);
          // this.router.navigate(['/tutorials']);
        },
        error => {
          console.log(error);
        });
  }

  // all neighbourhoods 
  retrieveNeighbourhood(): void {
    this.neighbourhoodservice.fetchNeighbourhoodApi()
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
    this.currentNeighbourhood= neighbourhood;
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

  // searchNeighbourhood(): void {
  //   this.neighbourhood.findByName(this.neighbourhood_name)
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

