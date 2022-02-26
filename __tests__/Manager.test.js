const Manager = require("../lib/Manager")

test("creates object manager", () => {
    const man = new Manager("Emily", 3, "emily@apple.com", 201)
    expect(man.name).toBe("Emily");
    expect(man.id).toEqual(expect.any(Number));
       
    const isChar = man.email.includes("@");
    if (isChar) {
    console.log("email contains @")
    } else {
    console.log("email does not contain @")
    }
    
    expect(isChar).toBe(true)
    expect(man.officeNumber).toBe(201)
   })
