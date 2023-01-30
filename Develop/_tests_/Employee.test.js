const Employee = require ('../lib/Employee');
describe ('Employee', () => {
    it ('should create a new type of employee' , () => {
        const employeeExample = new Employee ();
        expect (typeof (employeeExample)).toBe('object');
    })

    it ('should return the name of employee', () => {
        const name ="Pia";
        const employeeExample = new Employee (name);
        expect (employeeExample.name).toBe(name);
    })
})

