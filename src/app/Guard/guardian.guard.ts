import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SERVICIOService } from '../servicio/servicio.service';
@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate {
  constructor(
    private servicio: SERVICIOService,
    private router: Router
  ) { }

  
  canActivate(): boolean {
    let isLogged:boolean = false;
    this.servicio.userIsLogged().subscribe(
      (logged) => {
        isLogged = logged;
      }
    );
    if(isLogged == false){
    
      this.router.navigate(['/login']);
    }
    return isLogged;
  
}
}