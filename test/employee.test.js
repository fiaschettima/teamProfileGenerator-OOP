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
    it('fills in parameters not given with placeholders', () => {
      const blankEmp = new Employee();
      expect(blankEmp).toEqual(expect.objectContaining(
        { 
          name: "Not Given", 
          id: '0000',
          email: '...@got.com'
        }));
    })
});