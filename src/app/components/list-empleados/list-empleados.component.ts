import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent {

  empleados : any[] = [];

  constructor(private _empleadoService: EmpleadoService) {
  }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    this._empleadoService.getEmpleados().subscribe(data => {
      console.log(data)
      data.forEach((element: any) => {
        console.log(element.payload.doc.data())
      });
    });
  }

}
