import { BusinessService } from './../../services/bizz/business.service';
import { Business } from './../../interfaces/business';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})

export class BusinessListComponent implements OnInit {

  business?: Business[];
  currentBusiness?: Business;
  currentIndex = -1;
  business_name = '';
  constructor(private businessservice:BusinessService) { }

  ngOnInit(): void {
    this.retrieveBusiness();
  }

  retrieveBusiness(): void {
    this.businessservice.getAll()
      .subscribe(
        data => {
          this.business = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveBusiness();
    this.currentBusiness = undefined;
    this.currentIndex = -1;
  }

  setActiveBusiness(business: Business, index: number): void {
    this.currentBusiness= business;
    this.currentIndex = index;
  }

  removeAllBusiness(): void {
    this.businessservice.deleteAll()
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
  //   this.businessservice.findByBusinessName(this.business_name)
  //     .subscribe(
  //       data => {
  //         this.business = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }




}
