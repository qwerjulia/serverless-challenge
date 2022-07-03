import Employee from "../entity/employee";
import CreateEmployee from "../usecases/create_employee"
import DeleteEmployee from "../usecases/delete_employee";
import ReadEmployee from "../usecases/read_employee";
import UpdateEmployee from "../usecases/update_employee";

export default class EmployeeController {
	create_employee(nome:string, cargo:string, idade:number){
        const employee = new Employee(nome, cargo, idade)
        const create_employee = new CreateEmployee().execute(employee)
        return create_employee
    }

    read_employee(nome:string, cargo:string, idade:number){
        const employee = new Employee(nome, cargo, idade)
        const read_employee = new ReadEmployee().execute(employee)
        return read_employee
    }

    update_employee(id:number, nome:string, cargo:string, idade:number){
        const update_employee = new UpdateEmployee().execute(id, nome, cargo, idade)
        return update_employee
    }

    delete_employee(id:number){
        const delete_employee = new DeleteEmployee().execute(id)
        return delete_employee
    }
}

