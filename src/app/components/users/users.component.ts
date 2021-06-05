import { UserService } from './../../services/users/user.service';
import { Users } from './../../interfaces/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] = [];

  constructor(private userservice: UserService) { }

  findUsers() {
    this.userservice.fetchUsersApi().subscribe(
      (res) => {
        this.users = res

      }, error => {
        console.error(error)
      }
    );
  }
  ngOnInit(): void {
  }

}
