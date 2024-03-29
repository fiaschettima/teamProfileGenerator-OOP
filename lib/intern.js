const Employee = require('./employee.js');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id , email);
        if(school === ''){
            this.school = 'N/A'
        }
        else{this.school = school};
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;