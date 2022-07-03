"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('sqlite::memory:');
const EmployeeModel = sequelize.define('Employee', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.EmployeeModel = EmployeeModel;
