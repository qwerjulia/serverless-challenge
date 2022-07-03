import { EmployeeModel } from "../../infra/database";
import EmployeeRepository from "../../infra/repository/employee_repository";

export default class CreateEmployee {

	async execute(employee: any) {
		return new EmployeeRepository().create_employee(employee);
	}
}
