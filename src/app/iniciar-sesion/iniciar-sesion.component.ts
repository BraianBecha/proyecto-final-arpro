import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioServiceService } from '../servicios/portfolio-service.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
form:FormGroup;
 constructor (private  formBuilder : FormBuilder, private obtenerDatos: PortfolioServiceService){ 
  this.form=this.formBuilder.group(
    {
      
    })
 } 

  ngOnInit(): void {
    this.obtenerDatos.obtenerDatos().subscribe(data=>{
      console.log(data); 
    })
  }

}
