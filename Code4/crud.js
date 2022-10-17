const fs = require('fs');

let item = JSON.stringify({ "name": "Employee 1 Name", "salary": 2000 });

// Create
fs.writeFile('employees.json', item, (err) => {
    if(err) {
        console.log('Something went wrong!');
    }
});

// Read
fs.readFile('employees.json', (err, data) => {
    if(err) {
        console.log('something went wrong!');
    } else {
        console.log(data.toString());
    }
});

// Update
fs.appendFile('employees.json', '{ "name": "Employee 2 Name", "salary": 4000 }', (err, data) => {
    if(err) {
        console.log('Error');
    } else {
        console.log(data);
    }
});

// Delete
fs.unlink('employees.json', (err) => {
    if(err) {
        console.log('Error');
    }
});