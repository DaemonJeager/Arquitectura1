import { Component, OnInit } from '@angular/core';
import { SERVICIOService } from '../servicio/servicio.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  public detalles: any;

  constructor(private stateservice: SERVICIOService) {}

  ngOnInit() {
    this.stateservice.getArrendadores().subscribe((data: any) => {
      this.detalles = data;
      console.log(this.detalles);
    }
    );
  }}