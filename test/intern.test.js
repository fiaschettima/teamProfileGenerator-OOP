const Intern = require("../lib/intern");

describe("Intern Class", () => {
    it("creates an object with name id and email and github", () => {
      const int1 = new Intern('John', 1, 'johnSnow@got.com', 'Knights Watch');
  
      expect(int1).toEqual(expect.objectContaining(
        { 
            name: "John", 
            id: 1,
            email: 'johnSnow@got.com',
            school: 'Knights Watch'
    }));
    });
    it('should return the employees email when getschool is called', () => {
      const int1 = new Intern('John', 1, 'johnSnow@got.com', 'Knights Watch');
      expect(int1. getSchool()).toEqual('Knights Watch')
    });

    it('should return the employees role when getRole is called', () => {
      const int1 = new Intern('John', 1, 'johnSnow@got.com', 'Knights Watch');
      expect(int1.getRole()).toEqual('Intern')
    });
});