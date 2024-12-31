const fs = require('fs');
const { university } = require('../data.json');
const prompt = require('prompt-sync')(); // Use prompt-sync for synchronous input

function updateData() {
    console.log("\nChoose what you want to update:");
    console.log("1. Update Department");
    console.log("2. Update Professor");
    console.log("3. Update Course");
    console.log("4. Update Student");
    console.log("5. Go Back");

    const choice = parseInt(prompt("Enter your choice: "));
    
    switch (choice) {
        case 1:
            updateDepartment();
            break;
        case 2:
            updateProfessor();
            break;
        case 3:
            updateCourse();
            break;
        case 4:
            updateStudent();
            break;
        case 5:
            console.log("Going back...");
            return;
        default:
            console.log("Invalid choice, please try again.");
            updateData();
    }
}

function updateDepartment() {
    const departmentName = prompt("Enter the department name: ").toLowerCase();
    const department = university.departments.find(dep => dep.name.toLowerCase() === departmentName);

    if (!department) {
        console.log("Department not found!");
        return;
    }

    const newHOD = prompt(`Enter the new Head of Department name (current: ${department.hod}): `);
    department.hod = newHOD;
    console.log("Department updated successfully!");

    // Save the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

function updateProfessor() {
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

    const newCourses = prompt(`Enter the new courses for the professor (current: ${professor.courses.join(', ')}): `)
        .split(',')
        .map(course => course.trim());
    professor.courses = newCourses;
    console.log("Professor updated successfully!");

    // Save the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

function updateCourse() {
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

    const oldCourseName = prompt("Enter the course name to update: ");
    if (!professor.courses.includes(oldCourseName)) {
        console.log("Course not found!");
        return;
    }

    const newCourseName = prompt("Enter the new course name: ");
    const courseIndex = professor.courses.indexOf(oldCourseName);
    professor.courses[courseIndex] = newCourseName;
    console.log("Course updated successfully!");

    // Save the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

function updateStudent() {
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

    const studentId = prompt("Enter the student's ID: ");
    const student = professor.students.find(stud => stud.id === studentId);

    if (!student) {
        console.log("Student not found!");
        return;
    }

    student.name = prompt(`Enter the new student name (current: ${student.name}): `);
    student.year = parseInt(prompt(`Enter the new student year (current: ${student.year}): `));
    console.log("Student updated successfully!");

    // Save the updated data back to data.json
    fs.writeFileSync('./data.json', JSON.stringify({ university }, null, 2), 'utf-8');
    console.log('Changes saved to data.json');
}

module.exports = { updateData };
