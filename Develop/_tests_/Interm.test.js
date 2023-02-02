const Employee = require ('../lib/Employee');
const Intern = require ('../lib/Intern');

describe ('Employee',() => {
    
    it ('should retunr the Intern school name',() => {
        const school= "AUS";
        const internExample = new Intern ('Pia', 35, 'piafierro.3187@gmail.com', 'AUS');
        expect(internExample.getSchool()).toBe(school)
    })

    it ('should retunr the role Intern ',() => {
        const role= "Intern";
        const internExample = new Intern ('Pia', 35, 'piafierro.3187@gmail.com', 'AUS');
        expect(internExample.getRole()).toBe(role)
    })
    it ('should retunr the Intern icon',() => {
        const icon= "fas fa-user-graduate";
        const internExample = new Intern ('Pia', 35, 'piafierro.3187@gmail.com', 'AUS');
        expect(internExample.getIcon()).toBe(icon)
    })
    it ('should retunr school',() => {
        const internData= "School";
        const internExample = new Intern ('Pia', 35, 'piafierro.3187@gmail.com', 'AUS');
        expect(internExample.getEmployeeData()).toBe(internData)
    })
    it ('should retunr Intern school name',() => {
        const internDataValue= "AUS";
        const internExample = new Intern ('Pia', 35, 'piafierro.3187@gmail.com', 'AUS');
        expect(internExample.getEmployeeDataValue()).toBe(internDataValue)
    })
})