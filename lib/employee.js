class Employee {
    constructor(name, id, email){
        if(name === ''){
            this.name = 'N/A'
        }
        else{this.name = name;}
        if(id === ''){
            this.id = 'N/A'
        }
        else{this.id = id};
        if(email ===''){
            this.email = 'N/A'
        }
        else{this.email = email}
    }
    getName(){
        return this.name
    }
    getId(){
        return this. id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Employee'
    }
}
module.exports = Employee;