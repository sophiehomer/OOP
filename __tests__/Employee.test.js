const Employee = require("../lib/Employee")

test("create object employee", () => {
 const emp = new Employee("Jessica", 10, "jessica@gmail.com");
 console.log(emp)
 expect(emp.name).toBe("Jessica");
 expect(emp.id).toEqual(expect.any(Number));
 
 const isChar = emp.email.includes("@");
 if (isChar) {
     console.log("email contains @")
 } else {
     console.log("email does not contain @")
 }
 
 expect(isChar).toBe(true)
 
})