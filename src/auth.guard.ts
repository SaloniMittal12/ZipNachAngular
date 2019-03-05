import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Router, CanActivate } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private routes: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem('loginResponse') !== null) {
      return true;
    } else {
      this.routes.navigate(['/login']);
      return false;
    }
  }
}
