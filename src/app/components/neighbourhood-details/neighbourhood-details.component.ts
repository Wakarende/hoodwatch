import { NeighbourhoodService } from './../../services/hood/neighbourhood.service';
import { Neighbourhood } from './../../interfaces/neighbourhood';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-neighbourhood-details',
  templateUrl: './neighbourhood-details.component.html',
  styleUrls: ['./neighbourhood-details.component.css']
})
export class NeighbourhoodDetailsComponent implements OnInit {

  currentNeighbourhood: Neighbourhood = {
    neighbourhood_name: '',
    description: '',
    location:'',
    occupants:'',
    published: false
  };
  message = '';

  constructor(
    private neighbourhoodservice: NeighbourhoodService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.message = '';
    this.getNeighbourhood(this.route.snapshot.paramMap.get('id'));
  }

  getNeighbourhood(id: any): void {
    this.neighbourhoodservice.get(id)
      .subscribe(
        data => {
          this.currentNeighbourhood = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  // Update 
  updateNeighbourbood(status: boolean): void {
    const data = {
      title: this.currentNeighbourhood.neighbourhood_name,
      description: this.currentNeighbourhood.description,
      published: status
    };

    this.neighbourhoodservice.update(this.currentNeighbourhood.id, data)
      .subscribe(
        response => {
          this.currentNeighbourhood.published=status;
          console.log(response);
          // this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateNieghbourhood(): void {
    this.neighbourhoodservice.update(this.currentNeighbourhood.id, this.currentNeighbourhood)
      .subscribe(
        response => {
          console.log(response);
          // this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteNeighbourhood(): void {
    this.neighbourhoodservice.delete(this.currentNeighbourhood.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/neighbourhood']);
        },
        error => {
          console.log(error);
        });
  }






}
