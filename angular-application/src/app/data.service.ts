import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tokenSubject: BehaviorSubject<any> = new BehaviorSubject<boolean | string>(false);
  public Users:any=[]
  token$: Observable<any> = this.tokenSubject.asObservable();

  setToken(token: string) {
    this.tokenSubject.next(token);
  }
  getToken(){
    return this.tokenSubject.value;
  }
  setUsers(users: any) {
    users.forEach((element:any) => {
      this.Users.push(element)
    });
  }
}