class User {
    constructor(email, password, token, userName, type) {
        this.email = email;
        this.password = password;
        this.token = token;
        this.userName = userName;
        this.type = type;
    }
}

class UserSession extends User {
    constructor(email, token, userName, type) {
        super(email, null, token, userName, type);
    }
}

class Employee {
    constructor(name, licenseNumber, age, id_userRole, id_userSpecialty, id_user) {
        this.name = name;
        this.licenseNumber = licenseNumber;
        this.age = age;
        this.id_userRole = id_userRole;
        this.id_userSpecialty = id_userSpecialty;
        this.id_user = id_user;
    }
}

class Role {
    constructor(name) {
        this.name = name;
    }
}

class Specialty {
    constructor(name) {
        this.name = name;
    }
}

export {User, UserSession, Employee, Role, Specialty};