import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  private url = "http://localhost:8080/user/login";
  user = {
    username: '',
    password: ''
  };
  usersname=[];
  constructor(public http: HttpClient) { }
  login() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post(this.url,
      {
        username: this.user.username,
        password: this.user.password,
      }, httpOptions).subscribe((response: any) => {
        window.alert(response.message);
      });
  }
  allUsers() {
    var api = 'http://localhost:8080/user/allUsers';
    this.http.get(`${api}`).subscribe((response: any) => {
        this.usersname=response.message;      
    });
  }
}
