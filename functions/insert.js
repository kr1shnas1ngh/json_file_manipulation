const fs = require('fs');
const { university } = require('../data.json'); 
const prompt = require('prompt-sync')(); // Use prompt-sync for synchronous input

function insertData() {
    console.log("\nChoose what you want to insert:");
    console.log("1. Insert Department");
    console.log("2. Insert Professor");
    console.log("3. Insert Course");
    console.log("4. Insert Student");
    console.log("5. Go Back");

    const choice = parseInt(prompt("Enter your choice: "));
    
    switch (choice) {
        case 1:
            insertDepartment();
            break;
        case 2:
            insertProfessor();
            break;
        case 3:
            insertCourse();
            break;
        case 4:
            insertStudent();
            break;
        case 5:
            console.log("Going back...");
            return;
        default:
            console.log("Invalid choice, please try again.");
            insertData();
    }
}

function insertDepartment() {
    const departmentName = prompt("Enter the department name: ").toLowerCase();
    const departmentExists = university.departments.some(dep => dep.name.toLowerCase() === departmentName);
    
    if (departmentExists) {
        console.log("Department already exists!");
        return;
    }

    const newDepartment = {
        name: departmentName,
        hod: prompt("Enter the department's Head of Department name: "),
        professors: []
    };

    university.departments.push(newDepartment);
    console.log("Department added successfully!");

    // Write the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

function insertProfessor() {
    const departmentName = prompt("Enter the department name: ").toLowerCase();
    const department = university.departments.find(dep => dep.name.toLowerCase() === departmentName);

    if (!department) {
        console.log("Department not found!");
        return;
    }

    const professorName = prompt("Enter the professor's name: ").toLowerCase();
    const professorExists = department.professors.some(prof => prof.name.toLowerCase() === professorName);

    if (professorExists) {
        console.log("Professor already exists in this department!");
        return;
    }

    const newProfessor = {
        name: professorName,
        courses: prompt("Enter the professor's courses (comma separated): ").split(',').map(course => course.trim()),
        students: []
    };

    department.professors.push(newProfessor);
    console.log("Professor added successfully!");

    // Write the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

function insertCourse() {
    const departmentName = prompt("Enter the department name: ").toLowerCase();
    const department = university.departments.find(dep => dep.name.toLowerCase() === departmentName);

    if (!department) {
        console.log("Department not found!");
        return;
    }

    const professorName = prompt("Enter the professor's name: ").toLowerCase();
    const professor = department.professors.find(prof => prof.name.toLowerCase() === professorName);

    if (!professor) {
        console.log("Professor not found!");
        return;
    }

    const courseName = prompt("Enter the new course name: ");
    if (professor.courses.includes(courseName)) {
        console.log("Course already exists for this professor!");
        return;
    }

    professor.courses.push(courseName);
    console.log("Course added successfully!");

    // Write the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

function insertStudent() {
    const departmentName = prompt("Enter the department name: ").toLowerCase();
    const department = university.departments.find(dep => dep.name.toLowerCase() === departmentName);

    if (!department) {
        console.log("Department not found!");
        return;
    }

    const professorName = prompt("Enter the professor's name: ").toLowerCase();
    const professor = department.professors.find(prof => prof.name.toLowerCase() === professorName);

    if (!professor) {
        console.log("Professor not found!");
        return;
    }

    const studentId = prompt("Enter the student's ID (e.g., cs1): ");
    const studentExists = professor.students.some(stud => stud.id === studentId);

    if (studentExists) {
        console.log("Student already exists!");
        return;
    }

    const newStudent = {
        name: prompt("Enter the student's name: "),
        id: studentId,
        year: parseInt(prompt("Enter the student's year (1, 2, 3, 4): "))
    };

    professor.students.push(newStudent);
    console.log("Student added successfully!");

    // Write the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

module.exports = { insertData };
