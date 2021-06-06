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
   

  neighbourhood:Neighbourhood[]=[];
 

  constructor(private neighbourhoodservice:NeighbourhoodService) {
  
   }
  ngOnInit(): void {
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
}

