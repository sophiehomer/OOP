const Engineer = require("../lib/Engineer")

test("creates object engineer", () => {
 const eng = new Engineer("Bobby", 1, "bobby@apple.com", "sophiehomer")
 expect(eng.name).toBe("Bobby");
 expect(eng.id).toEqual(expect.any(Number));
    
 const isChar = eng.email.includes("@");
 if (isChar) {
 console.log("email contains @")
 } else {
 console.log("email does not contain @")
 }
 
 expect(isChar).toBe(true)
 expect(eng.github).toBe("sophiehomer")
})