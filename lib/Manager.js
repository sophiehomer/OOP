const Employee = require("../lib/Employee");

class manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.Id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return manager;
    }
}

module.exports = Employee;
