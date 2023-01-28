// using Employee constructor to create class Engineer
const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github= github;
    }
    getGithub () {
        return this.github;
    }
 //employee role to Engineer 
    getRole () {
        return "Engineer";
    }
    getIcon () {
        return "fas fa-glasses"
    }
    getEmployeeData () {
        return "GitHub";
    }
    getEmployeeDataValue () {
        return "<a href=https://github.com/" + this.github +">" + this.github + "</a>";
    }
}

module.exports = Engineer;