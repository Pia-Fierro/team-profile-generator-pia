// using Employee constructor to created class Intern
const Employee = require ('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
//returning school input
    getSchool () {
        return this.school;
    }
// overwritting role to Intern
    getRole () {
        return "Intern";
    }
    getIcon () {
        return "fas fa-user-graduate"
    }
    getInternData () {
        return "School:"
    }
    getInternValue () {
        return this.school;
    }
}

module.exports = Intern;