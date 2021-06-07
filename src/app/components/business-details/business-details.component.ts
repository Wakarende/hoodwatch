import { BusinessService } from './../../services/bizz/business.service';
import { Business } from './../../interfaces/business';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent implements OnInit {

  currentBusiness: Business = {
    business_name: '',
    business_email: '',
    neighbourhood: '',
    published: false
  };
  message = '';

  constructor(
    private businessservice:BusinessService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.message = '';
    this.getBusiness(this.route.snapshot.paramMap.get('id'));
  }

  getBusiness(id: any): void {
    this.businessservice.get(id)
      .subscribe(
        data => {
          this.currentBusiness = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      business_name: this.currentBusiness.business_name,
      business_email: this.currentBusiness.business_email,
      neighbourhood: this.currentBusiness.neighbourhood,
      published: status
    };

    this.businessservice.update(this.currentBusiness.id, data)
      .subscribe(
        response => {
          this.currentBusiness.published = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updatePost(): void {
    this.businessservice.update(this.currentBusiness.id, this.currentBusiness)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deletePost(): void {
    this.businessservice.delete(this.currentBusiness.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/business']);
        },
        error => {
          console.log(error);
        });
  }






}
