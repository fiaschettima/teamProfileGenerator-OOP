const Employee = require("../lib/employee");

describe("Employee Class", () => {
    it("creates an object with name id and email", () => {
      const empl1 = new Employee('John', 1, 'johnSnow@got.com');
  
      expect(empl1).toEqual(expect.objectContaining(
        { 
            name: "John", 
            id: 1,
            email: 'johnSnow@got.com'
    }));
    });
    it('should return the employees name when getName is called', () => {
      const empl1 = new Employee('John', 1, 'johnSnow@got.com');
      expect(empl1.getName()).toEqual('John')
    });

    it('should return the employees id when getid is called', () => {
      const empl1 = new Employee('John', 1, 'johnSnow@got.com');
      expect(empl1.getId()).toEqual(1)
    });
    it('should return the employees email when getemail is called', () => {
      const empl1 = new Employee('John', 1, 'johnSnow@got.com');
      expect(empl1.getEmail()).toEqual('johnSnow@got.com')
    });

    it('should return the employees role when getRole is called', () => {
      const empl1 = new Employee('John', 1, 'johnSnow@got.com');
      expect(empl1.getRole()).toEqual('Employee')
    });
});