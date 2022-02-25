const Employee = require("../lib/Employee");

class intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.Id = id;
        this.email = email;
        this.school = school;
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
    getSchool() {
        return this.school;
    }
    getRole() {
        return intern;
    }
}

module.exports = Employee;
