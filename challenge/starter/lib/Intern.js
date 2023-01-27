// Import the main Employee constructor 
const Employee = require('./Employee');

// Constructor for the Intern
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 