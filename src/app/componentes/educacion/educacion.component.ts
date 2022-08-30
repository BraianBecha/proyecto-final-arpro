import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/servicios/portfolio-service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

   educationList: any;
  constructor( private datosPortfolio: PortfolioServiceService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{

     this.educationList=data.educacion;

    })

  }

}
