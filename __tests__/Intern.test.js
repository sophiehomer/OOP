const Intern = require("../lib/Intern");

test("creates object intern", () => {
 const int = new Intern("Oliver", 2, "oliver@gmail.com", "Columbia")
 expect(int.name).toBe("Oliver");
 expect(int.id).toEqual(expect.any(Number)); 
 const isChar = int.email.includes("@");
 if (isChar) {
 console.log("email contains @")
 } else {
 console.log("email does not contain @")
 }
 expect(isChar).toBe(true)
 expect(int.school).toBe("Columbia")
})