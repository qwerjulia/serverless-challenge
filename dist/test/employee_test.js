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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = __importDefault(require("../core/entity/employee"));
const create_employee_1 = __importDefault(require("../core/usecases/create_employee"));
test("should create employee", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const employee = new employee_1.default("Julia", "Dev Junior", 19);
        const create_employee = new create_employee_1.default().execute(employee);
        expect(create_employee).toBeDefined;
    });
});
test("shouldn't create employee when nome is null", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const employee = new employee_1.default("", "Dev Junior", 19);
        const create_employee = new create_employee_1.default().execute(employee);
        expect(create_employee).toThrowError(Error);
    });
});
test("shouldn't create employee when cargo is null", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const employee = new employee_1.default("Julia", "", 19);
        const create_employee = new create_employee_1.default().execute(employee);
        expect(create_employee).toThrowError(Error);
    });
});
