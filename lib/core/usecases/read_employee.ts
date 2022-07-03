import { EmployeeModel } from "../../infra/database";
import EmployeeRepository from "../../infra/repository/employee_repository";

export default class ReadEmployee {
	async execute(employee: any) {
		return new EmployeeRepository().read_employee(employee);
	}
}