import { EmployeeModel } from "../../infra/database";
import EmployeeRepository from "../../infra/repository/employee_repository";

export default class UpdateEmployee {
	async execute(id: number, nome:string, cargo:string, idade:number) {
		return new EmployeeRepository().update_employee(id, nome, cargo, idade);
	}
}