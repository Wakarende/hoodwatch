import { Business } from './../../interfaces/business';
import { BusinessService } from './../../services/bizz/business.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business: Business[] = [];

  constructor(private businessservice: BusinessService) { }

  findBusiness() {
    this.businessservice.fetchBusinessApi().subscribe(
      (res) => {
        this.business = res

      }, error => {
        console.error(error)
      }
    );
  }
  ngOnInit(): void {
  }

}
