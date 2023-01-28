// using Employee constructor to create class Engineer
const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
        return this.officeNumber;
    }
//employee role to manager    
    getRole () {
        return "Manager";
    }
    getIcon () {
        return "fas fa-mug-hot"
    }
    getEmployeeData () {
        return "Office number:"
    }
    getEmployeeDataValue () {
        return this.officeNumber;
    }
}

module.exports= Manager;