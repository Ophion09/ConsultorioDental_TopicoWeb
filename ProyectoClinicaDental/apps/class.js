class User {
    constructor(email, password, token, userName, type) {
        this.email = email;
        this.password = password;
        this.token = token;
        this.userName = userName;
        this.type = type;
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

export {User, Employee};