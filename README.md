
# Json File Management System

## Table of Contents

- [Json File Management System](#json-file-management-system)
  - [Table of Contents](#table-of-contents)
  - [Task Description](#task-description)
  - [JSON Structure](#json-structure)
  - [Project File Structure](#project-file-structure)
  - [Working](#working)
    - [Main Menu](#main-menu)
    - [Function Details](#function-details)
      - [1. Insert](#1-insert)
      - [2. Search](#2-search)
      - [3. Update](#3-update)
      - [4. Delete](#4-delete)
      - [5. Exit](#5-exit)
    - [JSON File Handling](#json-file-handling)
    - [Error Handling](#error-handling)
    - [Example Workflows](#example-workflows)
      - [Adding a New Student](#adding-a-new-student)
      - [Searching for a Professor](#searching-for-a-professor)
  - [Installation](#installation)
  - [Summary](#summary)

---

## Task Description

Create a JavaScript program that performs the following operations on a JSON file:

1. **Complex Data Structure:** Create a nested JSON structure representing a university system with departments, professors, and students.
2. **CRUD Operations:** Implement functions to:
   - Add new entries at any nested level.
   - Update existing data with validation.
   - Delete entries while maintaining data integrity.
   - Search through nested structures.
3. **Data Validation:** Implement error handling and data validation for all operations.
4. **File Operations:**
   - Read from and write to a JSON file.
   - Handle file operation errors.
   - Implement automatic backup before modifications.

---

## JSON Structure

```
University
  ├── Properties: name, location
  └── Departments (Array)
        ├── Properties: name, hod
        └── Professors (Array)
              ├── Properties: name
              ├── Courses (Array)
              └── Students (Array)
                    ├── Properties: name, id, year
```

---

## Project File Structure

```
project-directory/
│
├── index.js                   # Main entry point
├── data.json                  # JSON file for data storage
│
├── utils/
│   ├── fileOperations.js      # readJSON and writeJSON functions
│
├── modules/
│   ├── insert.js              # Insert functions
│   ├── search.js              # Search functions
│   ├── delete.js              # Delete functions
│   ├── update.js              # Update functions
│
├── package.json               # Project dependencies
└── node_modules/              # Installed dependencies
```

---

## Working

The program operates through a **main loop** that continuously prompts the user with options to perform various CRUD (Create, Read, Update, Delete) operations on a university's data stored in a JSON file.

### Main Menu

The main menu displays the following options to the user:

1. **Insert Data**
2. **Search Data**
3. **Update Data**
4. **Delete Data**
5. **Exit**

The user's choice is processed through a `switch-case` structure, and the corresponding function is called based on the input.

### Function Details

#### 1. Insert

- A loop allows the user to choose what data to insert:
  1. **Insert Department Data**
     - Add a new department to the university.
     - Requires a department name and the HOD's name.
  2. **Insert Professor Data**
     - Add a professor to a specific department.
     - Requires the professor's name, associated department, and the courses they teach.
  3. **Insert Course Data**
     - Add courses under a specific professor.
     - Requires the professor's name, department, and the course name.
  4. **Insert Student Data**
     - Add students to a specific professor's class.
     - Requires the student’s name, ID, year, department, and professor's name.
  5. **Exit Insert Menu**
     - Returns the user to the main menu.

#### 2. Search

- Prompts the user for a keyword to search in the JSON data.
- Searches across all levels (departments, professors, courses, and students).
- Displays a success message if the data is found; otherwise, it informs the user that the data is not found.

#### 3. Update

- Allows the user to modify existing data:
  - **Departments:** Update the name or HOD of a department.
  - **Professors:** Update professor details like name or courses.
  - **Courses:** Modify course details under a professor.
  - **Students:** Update student details such as name, year, or ID.

#### 4. Delete

- Allows the user to remove data at various levels:
  - **Departments:** Delete a department and all associated data.
  - **Professors:** Remove a professor and their courses/students.
  - **Courses:** Remove specific courses from a professor.
  - **Students:** Delete a student's record.

#### 5. Exit

- Ends the program gracefully by terminating the main loop.

---

### JSON File Handling

- The program reads data from a `data.json` file using the `fs` module at the start of each function.
- Any modifications to the data (insert, update, or delete) are written back to the file to persist changes.

---

### Error Handling

- The program validates user input to ensure:
  - Departments, professors, or students are not duplicated.
  - IDs follow the specified format (e.g., `cs1`, `me2`).
  - Non-existent data cannot be modified or deleted.
- Displays appropriate error messages for invalid or out-of-range choices.

---

### Example Workflows

#### Adding a New Student

1. From the main menu, choose **1. Insert Data**.
2. Select **4. Insert Student Data** from the insert menu.
3. Enter details like:
   - Student Department: `computer science`
   - Professor Name: `alan Turing`
   - Student Name: `jane Doe`
   - Student ID: `cs5`
   - Student Year: `1`
4. The new student record will be saved to the JSON file.

#### Searching for a Professor

1. From the main menu, choose **2. Search Data**.
2. Enter the keyword (e.g., `Grace Hopper`).
3. The program will search through the JSON file and display whether the professor exists.

---
## Installation
Follow the following steps to setup and run the Json file management system on your local machine.

1. Clone The Repository
```bash
git clone https://github.com/kr1shnas1ngh/json_file_manipulation.git
```
2. Install Node.js
- install node from the `Node.js Official Website`  
- To check if the node.js is installed use
```bash
node -v
```

3. Install Dependencies
```bash
npm install
```

4. Run The Application
```bash
node index.js
```
---
## Summary

This application provides a simple way to manage hierarchical university data, including departments, professors, courses, and students. It supports dynamic updates to the data while maintaining consistency through proper validation and file handling.
