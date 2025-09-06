## Project Apollonia Dental

The Apollonia Dental this is a guided project from Coursera, a REST API created by me using Node.js, Express, and MongoDB (Mongoose). Through this exercise i've praticed my skills gained from the "Back-End Developer" course, offered by Microsoft on Coursera.


## Main Structure

* **Node.js + Express:** Responsible for creating the server and defining the HTTP routes.
* **MongoDB + Mongoose:** A NoSQL database used to store all employee and department data, with schemas defined to ensure data structure.
* **Docker + Docker Compose:** Aids in the execution and deployment of services (API and database) within isolated containers.

## Functions

* **Departments**
    * Create new departments
    * List all departments
    * Search for departments by ID
* **Employees**
    * Create new employees, synced with existing departments
    * List all employees, showing the department name (not just the ID)
    * Update and remove employees
    * List employees from a specific department

## Main Routes

* **GET /api/departments:** Lists all departments.
* **GET /api/departments/:id:** Searches for a department by ID.
* **POST /api/departments:** Creates a new department.
* **GET /api/employees:** Lists all employees (including the department name).
* **POST /api/employees:** Creates a new employee.
* **PUT /api/employees/:id:** Updates an employee.
* **DELETE /api/employees/:id:** Removes an employee.

## Data Flow

When creating an employee, the department's ID is sent to the database. The system validates the department ID before saving the employee. When fetching employees, the system returns the department's name using Mongoose's `populate` feature.

## Deploy

With Docker Compose, you can bring up both the MongoDB database and the Node.js API with a single command (`docker-compose up`). The project is also easy to version and share on GitHub.

## Summary

I've built a modern, scalable, and organized API. It's capable of managing employees and departments, with data validation and a ready-to-use database integration for deployment in any environment with Docker.


**Version: 0.0.2** *(final)*


// esse projeto é meu primeiro, digo, realizando-o de forma "profissional", precisei muito de ajuda e realizei muitos testes. Foram dificeis 2 dias resolvendo isso aqui. Quis colocar tudo em inglês para treinar e me acostumar com o ambiente profissional que almejo. Pedi a IA para corrigir o inglês, infelizmente ainda não tenho total aptidão, como eu disse tudo nesse projeto foi e será um enorme aprendizado para mim. Agradeço a oportunidade.
