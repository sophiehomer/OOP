const Employee = require("./Employee")

class Engineer {
    constructor(name, id, email) {
        this.name = name
        this.Id = id
        this.email = email
        this.github = github
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
    getGithub() {
        return this.github;
    }
    getRole() {
        return Engineer;
    }
}

module.exports = Engineer;