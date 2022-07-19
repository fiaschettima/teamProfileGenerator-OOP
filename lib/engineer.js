const Employee = require('./employee.js');
class Engineer  extends Employee{
    constructor(gitHub){
        this.gitHub = gitHub;
    }
    getGithub() {
        return this.gitHub;
    }
    getRole() {
        return 'Engineer'
    }
}
module.exports = Engineer;