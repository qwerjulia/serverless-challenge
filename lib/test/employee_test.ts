import { EmptyResultError } from "sequelize/types";
import Employee from "../core/entity/employee";
import CreateEmployee from "../core/usecases/create_employee"

test("should create employee", async function (){
    const employee = new Employee("Julia", "Dev Junior", 19)
    const create_employee = new CreateEmployee().execute(employee)
    expect(create_employee).toBeDefined
})

test("shouldn't create employee when nome is null", async function (){
    const employee = new Employee("", "Dev Junior", 19)
    const create_employee = new CreateEmployee().execute(employee)
    expect(create_employee).toThrowError(Error)
})

test("shouldn't create employee when cargo is null", async function (){
    const employee = new Employee("Julia", "", 19)
    const create_employee = new CreateEmployee().execute(employee)
    expect(create_employee).toThrowError(Error)
})
