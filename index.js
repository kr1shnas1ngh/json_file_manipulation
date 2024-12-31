const prompt = require("prompt-sync")();  // Use prompt-sync instead of readline-sync

// Import functions form the functions directory
const { insertData } = require("./functions/insert"); 
const { searchData } = require("./functions/search");
const { deleteData } = require("./functions/delete");
const { updateData } = require("./functions/update");

const main = () => {
    while (true) {
        console.log("\nWelcome to the University Management System");
        console.log("1. Insert Data");
        console.log("2. Search Data");
        console.log("3. Update Data");
        console.log("4. Delete Data");
        console.log("5. Exit");

        const choice = parseInt(prompt("Enter your choice: "));  // Use prompt to get user input

        switch (choice) {
            case 1:
                insertData();
                break;
            case 2:
                searchData();
                break;
            case 3:
                updateData();
                break;
            case 4:
                deleteData();
                break;
            case 5:
                console.log("Exiting the system. Goodbye!");
                process.exit(0);
            default:
                console.log("Invalid choice, please try again.");
        }
    }
};

main();