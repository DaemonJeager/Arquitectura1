import { Component,Injectable,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVICIOService } from '../servicio/servicio.service';
import { ServicioServicio } from '../servicio/service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { FormBuilder,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public Arrendadores: any;
  public Arrendatarios: any;
  public Arrendamientos: any;
  public Arrendamiento: any;
  public id: any;

  constructor(

    private http: HttpClient,
    private servicio: SERVICIOService,
    private servicio2: ServicioServicio,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    this.getArrendadores();
    this.getArrendatarios();
    this.getArrendamientos();
  }


  getArrendadores() {
    this.servicio.getArrendadores().subscribe((Arrendadores: any) => {
      this.Arrendadores = Arrendadores;
      console.log(this.Arrendadores);
    });
  }

  getArrendatarios() {
    this.servicio.getArrendatarios().subscribe((Arrendatarios: any) => {
      this.Arrendatarios = Arrendatarios;
      console.log(this.Arrendatarios);
    });
  }

  getArrendamientos() {
    this.servicio.getArrendamientos().subscribe((Arrendamientos: any) => {
      this.Arrendamientos = Arrendamientos;
      console.log(this.Arrendamientos);
    });
  }


  mostrardetalles(id: any) {
    this.servicio.setArrendamientos(id);
    this.router.navigate(['/detalle']);
  }

}
