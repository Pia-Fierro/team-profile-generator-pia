const Employee = require ('../lib/Employee');
const Manager = require ('../lib/Manager');

describe ('Employee',() => {
    
    it ('should retunr the office manager number',() => {
        const officeNumber= 12345678;
        const managerExample = new Manager ('Pia', 35, 'piafierro.3187@gmail.com', 12345678);
        expect(managerExample.getOfficeNumber()).toBe(officeNumber)
    })
    it ('should retunr the role Manager ',() => {
        const role= "Manager";
        const managerExample = new Manager ('Pia', 35, 'piafierro.3187@gmail.com', 12345678);
        expect(managerExample.getRole()).toBe(role)
    })
    it ('should retunr the Manager icon',() => {
        const icon= "fas fa-mug-hot";
        const managerExample = new Manager ('Pia', 35, 'piafierro.3187@gmail.com', 12345678);
        expect(managerExample.getIcon()).toBe(icon)
    })
    it ('should retunr Office number',() => {
        const employeeData= "Office number";
        const managerExample = new Manager ('Pia', 35, 'piafierro.3187@gmail.com', 12345678);
        expect(managerExample.getEmployeeData()).toBe(employeeData)
    })
    it ('should retunr Office number',() => {
        const employeeDataValue= 12345678;
        const managerExample = new Manager ('Pia', 35, 'piafierro.3187@gmail.com', 12345678);
        expect(managerExample.getEmployeeDataValue()).toBe(employeeDataValue)
    })
})