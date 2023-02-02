const Employee = require ('../lib/Employee');
const Engineer = require ('../lib/Engineer');

describe ('Employee',() => {
    
    it ('should retunr the Engineer GitHub user name',() => {
        const github= "Pia-Fierro";
        const engineerExample = new Engineer ('Pia', 35, 'piafierro.3187@gmail.com', 'Pia-Fierro');
        expect(engineerExample.getGithub()).toBe(github)
    })

    it ('should retunr the role Engineer ',() => {
        const role= "Engineer";
        const engineerExample = new Engineer ('Pia', 35, 'piafierro.3187@gmail.com', 'Pia-Fierro');
        expect(engineerExample.getRole()).toBe(role)
    })
    it ('should retunr the employee icon ',() => {
        const icon= "fas fa-glasses";
        const engineerExample = new Engineer ('Pia', 35, 'piafierro.3187@gmail.com', 'Pia-Fierro');
        expect(engineerExample.getIcon()).toBe(icon)
    })
    it ('should return the engineer GitHub user name',() => {
        const employeeData = "GitHub";
        const engineerExample = new Engineer ('Pia', 35, 'piafierro.3187@gmail.com', 'Pia-Fierro');
        expect(engineerExample.getEmployeeData()).toBe(employeeData);
    })
    it ('should return the GitHub employee link',() => {
        const employeeDataValue = "<a href=https://github.com/Pia-Fierro>Pia-Fierro</a>";
        const engineerExample = new Engineer ('Pia', 35, 'piafierro.3187@gmail.com', 'Pia-Fierro');
        expect(engineerExample.getEmployeeDataValue()).toBe(employeeDataValue);
    })  
    
})