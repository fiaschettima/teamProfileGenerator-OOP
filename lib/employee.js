class Employee {
    constructor(name, id, email){
        if(name === ''){
            this.name = 'None'
        }
        else{this.name = name;}
        if(id === ''){
            this.id = 'None'
        }
        else{this.id = id};
        if(email ===''){
            this.email = 'None'
        }
        else{this.email = email}
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }
}
module.exports = Employee;