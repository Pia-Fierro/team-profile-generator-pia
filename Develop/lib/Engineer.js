// using Employee constructor to created class Engineer
const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github= github;
    }
// returning github input  
    getGithub () {
        return this.github;
    }
 //overwritting role to Engineer 
    getRole () {
        return "Engineer";
    }
    getIcon () {
        return "fas fa-glasses"
    }
    getGithub () {
        return "<a href=https://github.com/" + this.github +">" + this.github + "</a>";
    }
    getEngineerData () {
        return "GitHub:";
    }
}

module.exports = Engineer;