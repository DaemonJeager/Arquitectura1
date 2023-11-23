import { Component, OnInit } from '@angular/core';
import { SERVICIOService } from '../servicio/servicio.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ServicioServicio } from '../servicio/service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

interface Arrendador {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  direccion: string;
  cedula: string;
}

interface Arrendatario {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  direccion: string;
  cedula: string;
}

interface Arrendamiento {
  id: number;
  fecha: string;
  monto: string;
  descripcion: string;
  arrendador_id: string;
  arrendatario_id: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LOGINPage implements OnInit {
  formulariologin: FormGroup;
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
    private toastController: ToastController,
    private formBuilder: FormBuilder
  ) { this.formulariologin = this.formBuilder.group({
    userName: [''],
    userPass: ['']
  });}

  async login() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    this.router.navigate(['/home']);
  }


  ngOnInit() {
  }

guardarDatosUsuario(){
  const nombreusuarioautenticado = {
    nombre: this.formulariologin.get('userName')?.value,
    pass: this.formulariologin.get('userPass')?.value
  }
  if (nombreusuarioautenticado.nombre == "admin" && nombreusuarioautenticado.pass == "admin"){
    this.router.navigate(['/home']);
  }
  else{
    console.log(nombreusuarioautenticado);
    console.log("Usuario iniciado correctamente")
    this.servicio.setNombreUsuario = nombreusuarioautenticado.nombre;
    this.servicio.setUserLogged(true);
    this.router.navigate(['/home']);

  }


}

}
