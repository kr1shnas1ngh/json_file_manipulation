const fs = require('fs');
const { university } = require('../data.json');
const prompt = require('prompt-sync')();

function deleteData() {
    console.log("\nChoose what you want to delete:");
    console.log("1. Delete Department");
    console.log("2. Delete Professor");
    console.log("3. Delete Course");
    console.log("4. Delete Student");
    console.log("5. Go Back");

    const choice = parseInt(prompt("Enter your choice: "));
    
    switch (choice) {
        case 1:
            deleteDepartment();
            break;
        case 2:
            deleteProfessor();
            break;
        case 3:
            deleteCourse();
            break;
        case 4:
            deleteStudent();
            break;
        case 5:
            console.log("Going back...");
            return;
        default:
            console.log("Invalid choice, please try again.");
            deleteData();
    }
}

function deleteDepartment() {
    const departmentName = prompt("Enter the department name to delete: ").toLowerCase();
    const departmentIndex = university.departments.findIndex(dep => dep.name.toLowerCase() === departmentName);

    if (departmentIndex === -1) {
        console.log("Department not found!");
        return;
    }

    university.departments.splice(departmentIndex, 1);
    console.log("Department deleted successfully!");

    // Save the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

function deleteProfessor() {
    const departmentName = prompt("Enter the department name: ").toLowerCase();
    const department = university.departments.find(dep => dep.name.toLowerCase() === departmentName);

    if (!department) {
        console.log("Department not found!");
        return;
    }

    const professorName = prompt("Enter the professor's name to delete: ").toLowerCase();
    const professorIndex = department.professors.findIndex(prof => prof.name.toLowerCase() === professorName);

    if (professorIndex === -1) {
        console.log("Professor not found!");
        return;
    }

    department.professors.splice(professorIndex, 1);
    console.log("Professor deleted successfully!");

    // Save the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

function deleteCourse() {
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

    const courseName = prompt("Enter the course name to delete: ");
    const courseIndex = professor.courses.indexOf(courseName);

    if (courseIndex === -1) {
        console.log("Course not found!");
        return;
    }

    professor.courses.splice(courseIndex, 1);
    console.log("Course deleted successfully!");

    // Save the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

function deleteStudent() {
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

    const studentId = prompt("Enter the student's ID to delete: ");
    const studentIndex = professor.students.findIndex(stud => stud.id === studentId);

    if (studentIndex === -1) {
        console.log("Student not found!");
        return;
    }

    professor.students.splice(studentIndex, 1);
    console.log("Student deleted successfully!");

    // Save the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

module.exports = { deleteData };
