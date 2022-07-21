
const managerCard = (person) => {
    return `
        <div class ="col-12 col-sm-6 col-md-4 g-4 text-center">
            <div class="card">
                <div class="card-header">
                    <h3>${person.getName()}</h3>
                </div>
                <div class="card-subtitle">
                    <h4>${person.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">${person.getId()}</li>
                        <li class="list-group-item">${person.getEmail()}</li>
                        <li class="list-group-item">${person.getOfficeNum()}</li>
                    </ul>
                </div>
            </div>
        </div>    
    `
}
const engineerCard = (person) => {
    return `
        <div class ="col-12 col-sm-6 col-md-4 g-4 text-center">
            <div class="card">
                <div class="card-header">
                    <h3>${person.getName()}</h3>
                </div>
                <div class="card-subtitle">
                    <h4>${person.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">${person.getId()}</li>
                        <li class="list-group-item">${person.getEmail()}</li>
                        <li class="list-group-item">${person.getGithub()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}
const internCard = (person)=>{
    return `
        <div class ="col-12 col-sm-6 col-md-4 g-4 text-center">
            <div class="card">
                <div class="card-header">
                    <h3>${person.getName()}</h3>
                </div>
                <div class="card-subtitle">
                    <h4>${person.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">${person.getId()}</li>
                        <li class="list-group-item">${person.getEmail()}</li>
                        <li class="list-group-item">${person.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}
// for loop here to iterate through people array and make cards for each
cards = "";
const makeEmployees = people => {
    console.log(people[0].getRole())
    for(let i =0; i<people.length; i++ ){
        if(people[i].getRole() === 'Manager'){
           cards += managerCard(people[i])
        }
        if(people[i].getRole() === 'Intern'){
            cards += internCard(people[i])
        }
        if(people[i].getRole() === 'Engineer'){
            cards += engineerCard(people[i])
        }
    }
    return cards;
}
const  teamBuilding = (people) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Team List</title>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">Team Members</h1>
                        <p class="lead">Generated List of all team members.</p>
                    </div>
                    </div>
            </div>
        </div>
        <div class="row">
            ${makeEmployees(people)}
            
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
    `
}
module.exports = teamBuilding