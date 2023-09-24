import { Component, OnInit  } from '@angular/core';
import { UsersService } from "../api/services";
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { catchError, delayWhen, takeUntil } from 'rxjs/operators';
import { throwError, timer } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public Users:any=false
  public getUser:string=''
  public getUserResult:any=false
  public insertUser:string=''
  public insertAge:number=0
  public insertUserResult:boolean=false
  public deleteUser:string=''
  public deleteUserResult:boolean=false
  public isLoading: {
    authenticate: boolean;
    getUsers: boolean;
    getUserByName: boolean;
    insertUser: boolean;
    deleteUser: boolean;
  } = {
    authenticate: false,
    getUsers: false,
    getUserByName: false,
    insertUser: false,
    deleteUser: false
  };
  constructor(private api: UsersService, private dataService: DataService) {}
  ngOnInit(): void {
    this.Authenticate()
  }
  Authenticate() {  
  // this.demo = true;
    console.log("it works!");
    this.isLoading.authenticate = true;
    let authenticationRequest$ = this.api.usersAuthenticateGet();
  
    authenticationRequest$.subscribe(
      (res: any) => {
        // Verificar si la respuesta contiene un error (por ejemplo, si es un mensaje de error)
        if (res.error) {
          console.log("res ERROR!!", res.error);
          // Manejar el error aquí si es necesario
        } else {
          console.log("RESPONSE!!:",res);
          let token = JSON.parse(res);
          this.dataService.setToken(token.token);
          console.log("¡Funcionó!");
        }
        this.isLoading.authenticate = false;
      },
      (error:any) => {
       alert("there was an error trying to authenticate")
        this.isLoading.authenticate = false;
        // Manejar el error aquí si es necesario
      }
    );
  }
  GetUsers() {
    try {
      if(this.dataService.getToken() != false){
        this.Users=false
        this.isLoading.getUsers = true;
         this.api.usersGet$Json().subscribe((res: any) => {
         let users = res;
         console.log(users)
        this.Users=users
        console.log("it worked!")
        this.isLoading.getUsers = false;
         },
         (error:any) => {
          this.isLoading.getUsers = false;
           alert("There was an error trying to get users, try again later")
         })
      }else{
        alert("you've got to authenticate before getting users from the database")
      }
  } catch (error) {
    alert("there was an error trying to connect to the database")
  }
  }
  GetUserByName() {
  this.getUserResult=false
    try {
      if (this.dataService.getToken() != false) {
        // Llama al método usersNameGet$Json y pasa el nombre como parámetro
        console.log("TRATANDO DE ENVIAR GET");
        let name = this.getUser
        this.isLoading.getUserByName = true;
        this.api.usersNameGet$Json({ name }).subscribe((user: any) => {
        if(user.name == undefined){
          this.getUserResult=false
          alert("user not found")
        }else{
          this.getUserResult=user
        }
        this.isLoading.getUserByName = false;
        },
        (error:any) => {
          this.isLoading.getUserByName = false;
          alert("There was an error trying to get the user, try again later")

        });
        console.log("GET enviado.");
      } else {
        alert("You've got to authenticate before getting user from the database");
      }
    } catch (error) {
      alert("There was an error trying to connect to the database");
    }
  }
  InsertUser(){
    
    if(this.dataService.getToken() != false){
      this.insertUserResult=false
      const userData = {
        name: this.insertUser,
        age: this.insertAge
      };
      this.isLoading.insertUser = true;
     this.api.usersPost$Json({ body: userData }).subscribe((user: any) => {
        this.insertUserResult=true
        this.isLoading.insertUser = false;
      },
      (error:any) => {
        this.isLoading.insertUser = false;
        alert("There was an error trying to insert the user, try again later")
      })
    }else{
      alert("You've got to authenticate before inserting user to the database");
    }

  }
  DeleteUser(){
    if(this.dataService.getToken() != false){
      this.deleteUserResult=false
      let name=this.deleteUser
      try {
        this.isLoading.deleteUser = true;
        this.api.usersNameDelete$Json({name})
        .subscribe((res: any) => {
          this.deleteUserResult=true
          console.log("res:",res)
          this.isLoading.deleteUser = false;
        },
        (error:any) => {
          this.isLoading.deleteUser = false;
          alert("There was an error trying to delete the user, try again later")
        })
      } catch (error) {
        console.log("err:",error)
      }
  
    }else{
      alert("You've got to authenticate before deleting user to the database");
    }

  }
}