const { university } = require('../data.json');
const prompt = require('prompt-sync')(); // Use prompt-sync for synchronous input

function searchData() {
    console.log("\nChoose what you want to search:");
    console.log("1. Search Department");
    console.log("2. Search Professor");
    console.log("3. Search Course");
    console.log("4. Search Student");
    console.log("5. Go Back");

    const choice = parseInt(prompt("Enter your choice: "));

    switch (choice) {
        case 1:
            searchDepartment();
            break;
        case 2:
            searchProfessor();
            break;
        case 3:
            searchCourse();
            break;
        case 4:
            searchStudent();
            break;
        case 5:
            console.log("Going back...");
            return;
        default:
            console.log("Invalid choice, please try again.");
            searchData(); // re-call the function for valid input
    }
}

function searchDepartment() {
    const departmentName = prompt("Enter the department name to search: ").toLowerCase();
    const department = university.departments.find(dep => dep.name.toLowerCase() === departmentName);

    if (!department) {
        console.log("Department not found!");
        return;
    }

    console.log(`Department: ${department.name}`);
    console.log(`Head of Department: ${department.hod}`);
    console.log("Professors in this department:");
    department.professors.forEach(prof => {
        console.log(`- ${prof.name}`);
    });
}

function searchProfessor() {
    const departmentName = prompt("Enter the department name to search for a professor: ").toLowerCase();
    const department = university.departments.find(dep => dep.name.toLowerCase() === departmentName);

    if (!department) {
        console.log("Department not found!");
        return;
    }

    const professorName = prompt("Enter the professor's name to search: ").toLowerCase();
    const professor = department.professors.find(prof => prof.name.toLowerCase() === professorName);

    if (!professor) {
        console.log("Professor not found!");
        return;
    }

    console.log(`Professor: ${professor.name}`);
    console.log("Courses taught by this professor:");
    professor.courses.forEach(course => {
        console.log(`- ${course}`);
    });
    console.log("Students taught by this professor:");
    professor.students.forEach(student => {
        console.log(`- ${student.name} (ID: ${student.id}, Year: ${student.year})`);
    });
}

function searchCourse() {
    const departmentName = prompt("Enter the department name to search for a course: ").toLowerCase();
    const department = university.departments.find(dep => dep.name.toLowerCase() === departmentName);

    if (!department) {
        console.log("Department not found!");
        return;
    }

    const professorName = prompt("Enter the professor's name to search for a course: ").toLowerCase();
    const professor = department.professors.find(prof => prof.name.toLowerCase() === professorName);

    if (!professor) {
        console.log("Professor not found!");
        return;
    }

    const courseName = prompt("Enter the course name to search: ");
    if (!professor.courses.includes(courseName)) {
        console.log("Course not found!");
        return;
    }

    console.log(`Course: ${courseName}`);
    console.log("Students enrolled in this course:");
    professor.students.forEach(student => {
        console.log(`- ${student.name} (ID: ${student.id}, Year: ${student.year})`);
    });
}

function searchStudent() {
    const departmentName = prompt("Enter the department name to search for a student: ").toLowerCase();
    const department = university.departments.find(dep => dep.name.toLowerCase() === departmentName);

    if (!department) {
        console.log("Department not found!");
        return;
    }

    const professorName = prompt("Enter the professor's name to search for a student: ").toLowerCase();
    const professor = department.professors.find(prof => prof.name.toLowerCase() === professorName);

    if (!professor) {
        console.log("Professor not found!");
        return;
    }

    const studentId = prompt("Enter the student's ID to search: ");
    const student = professor.students.find(stud => stud.id === studentId);

    if (!student) {
        console.log("Student not found!");
        return;
    }

    console.log(`Student: ${student.name} (ID: ${student.id}, Year: ${student.year})`);
}

module.exports = {
    searchData
};
