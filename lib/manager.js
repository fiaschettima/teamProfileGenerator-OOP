const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id , email, officeNumber){
        super(name, id , email);
        if(officeNumber === ''){
            this.officeNumber = 'N/A'
        }
        else{this.officeNumber = officeNumber};
    }
    getRole()  {
        return 'Manager';
    }
    getOfficeNum(){
        return this.officeNumber;
    }
}
module.exports = Manager;