import { Business } from './../../interfaces/business';
import { BusinessService } from './../../services/bizz/business.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business: Business[] ;

  // business: Business = {
  // business_name: '',
  // business_email: '',
  // neighbourhood: '',
  // published:false
  // };
  // submitted = false;

  constructor(private businessservice: BusinessService) { }

  findBusiness() {
    this.businessservice.getAll().subscribe(
      (res) => {
        this.business = res

      }, error => {
        console.error(error)
      }
    );
  }

  onSubmit(business: any) {
    this.businessservice.create(business).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(business)
  }
  // update 
  updateBusiness(id: any, business:Business) {
    this.businessservice.update(id, business).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(id)
  }
  
  // saveBusiness(): void {
  //   const data = {
  //     business_name: this.business.business_name,
  //     business_email: this.business.business_email,
  //     neighbourhood: this.business.neighbourhood
  //   };

  //   this.businessservice.create(data)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.submitted = true;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // newBusiness(): void {
  //   this.submitted = false;
  //   this.business = {
  //     business_name: '',
  //     business_email: '',
  //     neighbourhood: '',
  //     published: false
  //   };
  // }


  ngOnInit(): void {
  }
  
  

}
