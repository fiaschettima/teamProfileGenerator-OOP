const Manager = require('../lib/manager')

describe("Manager Class", () => {
    it("creates an object subset of employee with office number", () => {
      const mang1 = new Manager('John', 1, 'johnSnow@got.com', 101);
  
      expect(mang1).toEqual(expect.objectContaining(
        { 
            name: "John", 
            id: 1,
            email: 'johnSnow@got.com',
            officeNumber: 101
    }));
    });
    it('should return the employees email when getRole is called', () => {
      const mang1 = new Manager('John', 1, 'johnSnow@got.com', 101);
      expect(mang1.getRole()).toEqual('Manager')
    });

    it('should return the employees role when getoffice number is called', () => {
      const mang1 = new Manager('John', 1, 'johnSnow@got.com', 101);
      expect(mang1.getOfficeNum()).toEqual(101)
    });
});