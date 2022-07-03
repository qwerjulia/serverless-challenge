import { EmployeeModel } from "../database";

export default class EmployeeRepository implements EmployeeRepository {
    async create_employee(employee: any) {
        return EmployeeModel.create(employee)
    }

    async read_employee(employee: any){
        return EmployeeModel.findAll(employee)
    }

    async update_employee(id: number, nome:string, cargo:string, idade:number){
        return	EmployeeModel.update({nome:nome, idade:idade, cargo:cargo},{where: {id: id}})
    }

    async delete_employee(employee: any){
       return EmployeeModel.destroy(employee)
    }
    
}