import { EmployeeModel } from "../../infra/database";
import EmployeeRepository from "../../infra/repository/employee_repository";

export default class DeleteEmployee {
	async execute(employee: any) {
		return new EmployeeRepository().delete_employee(employee);
	}
}


