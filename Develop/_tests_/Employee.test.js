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

    it ('should return the ID of the employee', () => {
        const id= 123;
        const employeeExample = new Employee ('Pia',id);
        expect (employeeExample.id).toBe(id);
    })
    it ('should return the email of the employee', () => {
        const email= "piafierro.3187@gmail.com";
        const employeeExample = new Employee ('Pia', 123, email);
        expect (employeeExample.email).toBe(email);
    })

    it ('should retur the name of the employe when using getName', () => {
        const name= "Pia";
        const employeeExample = new Employee(name);
        expect (employeeExample.getName()).toBe(name);
    })

    it ('should retur the id of the employe when using getId', () => {
        const id= 12;
        const employeeExample = new Employee('Pia',id);
        expect (employeeExample.getId()).toBe(id);
    })

    it ('should retur the email of the employe when using getEmail', () => {
        const email= "piafierro.3178@gmail.com";
        const employeeExample = new Employee('Pia',123, email);
        expect (employeeExample.getEmail()).toBe(email);
    })
    it ('should retur the role of the employe when using getRole', () => {
        const role= "Employee";
        const employeeExample = new Employee('Pia',123, 'piafierro.3187@gmail.com', role);
        expect (employeeExample.getRole()).toBe(role);
    })
})

