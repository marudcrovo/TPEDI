import { Injectable } from '@nestjs/common';
import { EmpleadoModel } from './empleadoModel';

@Injectable()
export class EmployeeService {
employees = [];

constructor () {
    let empleado = {
        "id": 1,
        "nombre": "Maria",
        "telefono": "2494360691",
        "salario": "35000"
    }
    this.employees.push(empleado);
    
    empleado = {
        "id": 2,
        "nombre": "Gaston",
        "telefono": "2494694209",
        "salario": "20000"
    }
    this.employees.push(empleado);
}
getEmployee(id: number) {
  return this.employees.find((e) =>e.id==id);
  }

getEmployees(){
    return this.employees;
}
agregarEmpleado(empleadoModel: EmpleadoModel) {
    let empleado = {
      "id": empleadoModel.id,
      "nombre": empleadoModel.nombre,
      "telefono": empleadoModel.telefono,
      "salario": empleadoModel.salario
    }
    this.employees.push(empleado);
    return "modificacion exitosa";
}
modificarEmpleado(id: number, modelo: EmpleadoModel) {
        let empleado = null;      
        for(let i=0;i<this.employees.length;i++ ){
         if (this.employees[i].id==id){
           this.employees[i].salario=modelo.salario;
           return "Salario modificado exitosamente"
         }
        }
        return "El empleado no existe"

}
eliminarEmpleado(id) {
  let empleadoIndex = this.employees.findIndex((e) => e.id == id);
  if (empleadoIndex !== -1) {
    this.employees.splice(empleadoIndex, 1);
    return this.employees;
  } else {
    return 'El empleado no existe';
  }
  }
  }