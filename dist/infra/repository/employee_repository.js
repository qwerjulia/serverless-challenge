"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class EmployeeRepository {
    create_employee(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_1.EmployeeModel.create(employee);
        });
    }
    read_employee(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_1.EmployeeModel.findAll(employee);
        });
    }
    update_employee(id, nome, cargo, idade) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_1.EmployeeModel.update({ nome: nome, idade: idade, cargo: cargo }, { where: { id: id } });
        });
    }
    delete_employee(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_1.EmployeeModel.destroy(employee);
        });
    }
}
exports.default = EmployeeRepository;
