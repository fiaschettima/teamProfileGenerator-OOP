const Employee = require('./employee.js');

class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name, id , email);
        if(gitHub ===''){
            this.gitHub = 'N/A'
        }
        else{this.gitHub = gitHub};
    }
    getGithub() {
        return this.gitHub;
    }
    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer;