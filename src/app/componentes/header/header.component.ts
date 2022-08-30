import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from '../../servicios/portfolio-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dataheader : any;

  constructor( private datosPortfolio: PortfolioServiceService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      console.log("servicio corriendo")
      this.dataheader=data;
      console.log(this.dataheader);
      console.log(this.dataheader.persona.nombres);
       
  })
  }
}
