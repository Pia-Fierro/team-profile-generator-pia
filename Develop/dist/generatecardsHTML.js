// Cards for employess HTML template

const teamCards = (employee) => {
    return `    
    
        <div class="col-4 text-center">
            <div class="card-header">
                <h3>${employee.getName()}</h3>
                <h4><i class="${employee.getIcon(employee.getRole())}"></i>${employee.getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email:<a href="mailto:${employee.getEmail()}"> $${employee.getEmail()}</a></li>
                    <li class="list-group-item">${employee.getEmployeeData()}: ${employee.getEmployeeDataValue()}</li>
            </ul>
        </div>                                   
    `;
}

module.exports = teamCards;