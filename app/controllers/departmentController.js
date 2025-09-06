const Department = require('../models/department');

exports.listAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.getDepartmentById = async (req, res) => {
    try {
        const departmentID = req.params.id;
        const department = await Department.findById(departmentID);
        if (!department) {
            return res.status(404).send('Department not found');
        }
        res.json(department);
    } catch (error) {
        res.status(500).send(error);
    }
};
exports.createDepartment = async (req, res) => {
    try {
        const newDepartment = new Department(req.body);
        await newDepartment.save();
        res.status(201).json(newDepartment);
    } catch (error) {
        res.status(404).send('Error during department creation');
    }
};