"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = __importDefault(require("../entity/employee"));
const create_employee_1 = __importDefault(require("../usecases/create_employee"));
const delete_employee_1 = __importDefault(require("../usecases/delete_employee"));
const read_employee_1 = __importDefault(require("../usecases/read_employee"));
const update_employee_1 = __importDefault(require("../usecases/update_employee"));
class EmployeeController {
    create_employee(nome, cargo, idade) {
        const employee = new employee_1.default(nome, cargo, idade);
        const create_employee = new create_employee_1.default().execute(employee);
        return create_employee;
    }
    read_employee(nome, cargo, idade) {
        const employee = new employee_1.default(nome, cargo, idade);
        const read_employee = new read_employee_1.default().execute(employee);
        return read_employee;
    }
    update_employee(id, nome, cargo, idade) {
        const update_employee = new update_employee_1.default().execute(id, nome, cargo, idade);
        return update_employee;
    }
    delete_employee(id) {
        const delete_employee = new delete_employee_1.default().execute(id);
        return delete_employee;
    }
}
exports.default = EmployeeController;
