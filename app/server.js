const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/employee');
const Department = require('./models/department');
const app = express();
const port = process.env.PORT || 4545;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Project Coursera!');
});
app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Employee.find().populate('department');
        res.json(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get('/api/departments/', async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (error) {
        res.status(500).send(error);
    }  
}); //endpoint de criação de novos funcionários.
app.post('/api/employees', async (req, res) => {
    try {
        const { name, surname, department } = req.body;
        const departmentExists = await Department.findById(department);
        if (!departmentExists) {
            return res.status(400).send('Department not found with the provided ID');
        }
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
});
app.put('/api/employees/:id', async (req, res) => {
    try {
        const employeeID = req.params.id;
        const newData = req.body;
        const updateEmployee = await Employee.findByIdAndUpdate(employeeID, newData, { new: true });
        if (!updateEmployee) {
            return res.status(404).send('Employee not found');
        }
        res.json(updateEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
});
app.delete('/api/employees/:id', async (req, res) => {
    try {
        const employeeID = req.params.id;
        const deleteEmployee = await Employee.findByIdAndDelete(employeeID);
        if (!deleteEmployee) {
            return res.status(404).send('Employee not found');
        }
        res.json(deleteEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
});
const {connectDB} = require('./database');
const { cp } = require('fs');
        //popula os departamentos iniciais
    const populateInitialDepartments = async () => {
        const initialDepartments = [
            'General Dentistry',
            'Pediatric Dentistry',
            'Restorative Dentistry',
            'Surgery',
            'Orthodontics',
        ]; //para evitar a duplicação e criar ou encontrar o departamento
        for (const deptName of initialDepartments) {
            await Department.findOneAndUpdate(
                { name: deptName },
                { name: deptName },
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
        }
        console.log('Initial departments populated.');
    };
connectDB().then(() => { 
    populateInitialDepartments();
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
