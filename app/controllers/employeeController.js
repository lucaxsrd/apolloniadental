const Employee = require('../models/employee');
const Department = require('../models/department');

exports.listAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate({
            path: 'department',
            select: 'name' // retorna apenas o nome do departamento
        });
        res.json(employees);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const { name, surname, department } = req.body;
        const departmentExists = await Department.findById(department);
        if (!departmentExists) {
            return res.status(404).send('Department not found, please provide a valid department ID');
        }
        const newEmployee = new Employee({ name, surname, department });
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.updateEmployee = async (req, res) => {
    try {
        const employeeID = req.params.id;
        const newData = req.body;
        if (newData.department) {
            const departmentExists = await Department.findById(newData.department);
            if (!departmentExists) {
                return res.status(404).send('Department not found, please provide a valid department ID');
            }
        }
        const updatedEmployee = await Employee.findByIdAndUpdate(employeeID, newData, { new: true });
        if (!updatedEmployee) {
            return res.status(404).send('Employee not found');
        }
        res.json(updatedEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.deleteEmployee = async (req, res) => {
    try {
        const employeeID = req.params.id;
        const deletedEmployee = await Employee.findByIdAndDelete(employeeID);
        if (!deletedEmployee){
            return res.status(404).send('Employee not found');
        }
        res.json(deletedEmployee);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
