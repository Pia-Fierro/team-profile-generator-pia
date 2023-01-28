// using Employee constructor to create class Intern
const Employee = require ('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getSchool () {
        return this.school;
    }
//employee role to Intern
    getRole () {
        return "Intern";
    }
    getIcon () {
        return "fas fa-user-graduate"
    }
    getEmployeeData () {
        return "School:"
    }
    getEmployeeDataValue () {
        return this.school;
    }
}

module.exports = Intern;