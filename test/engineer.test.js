const Engineer = require("../lib/engineer");

describe("Engineer Class", () => {
    it("creates an object with name id and email and github", () => {
      const eng1 = new Engineer('John', 1, 'johnSnow@got.com', 'jSnow');
  
      expect(eng1).toEqual(expect.objectContaining(
        { 
            name: "John", 
            id: 1,
            email: 'johnSnow@got.com',
            gitHub: 'jSnow'
    }));
    });
});