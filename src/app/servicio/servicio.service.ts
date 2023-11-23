import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SERVICIOService {

  private arrendadores = new BehaviorSubject<any>([]);

  private arrendatarios = new BehaviorSubject<any>([]);

  private arrendamientos = new BehaviorSubject<any>([]);

  setArrendadores(arrendadores: any) {
    this.arrendadores.next(arrendadores);
  }

  getArrendadores() {
    return this.arrendadores.asObservable();
  }

  setArrendatarios(arrendatarios: any) {
    this.arrendatarios.next(arrendatarios);
  }

  getArrendatarios() {
    return this.arrendatarios.asObservable();
  }

  setArrendamientos(arrendamientos: any) {
    this.arrendamientos.next(arrendamientos);
  }

  getArrendamientos() {
    return this.arrendamientos.asObservable();
  }

nombreUsuario:BehaviorSubject<string> = new BehaviorSubject('');

 getNombreUsuario(){
    return this.nombreUsuario.asObservable();
  }

  setNombreUsuario(nombreUsuario:string){
    this.nombreUsuario.next(nombreUsuario);
  }


private isLogged:BehaviorSubject<boolean> = new BehaviorSubject(false)
getIsLogged(){
  return this.isLogged.asObservable();
}

set setIsLogged(isLogged:any){
  this.isLogged.next(isLogged);
}

private isLoggedsubjet:BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor() { }

  userIsLogged(): Observable<boolean>{
    return this.isLoggedsubjet.asObservable();
  }

  setUserLogged(isLogged: boolean): void{
    this.isLoggedsubjet.next(isLogged);
  }
}
