const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('./database');
const Department = require('./models/department');
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const app = express();
const port = process.env.PORT || 4545;

app.use(express.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);

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
app.get('/api/employees', async (req, res) => {
    console.log('Requisição GET recebida para /api/employees');
    try {
        const employees = await Employee.find().populate('department');
        res.json(employees);
    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        res.status(500).send(error);
    }
});
app.get('/', (req, res) => {
  res.send('Project Coursera!');
}); 
connectDB().then(() => { 
    populateInitialDepartments();
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
