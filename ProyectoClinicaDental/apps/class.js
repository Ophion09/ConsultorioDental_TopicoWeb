class User {
    constructor(email, password, token) {
        this.email = email;
        this.password = password;
        this.token = token;
    }
}

class Employee {
    constructor(name, licenseNumber, age, id_userRole, id_userSpecialty) {
        this.name = name;
        this.licenseNumber = licenseNumber;
        this.age = age;
        this.id_userRole = id_userRole;
        this.id_userSpecialty = id_userSpecialty;
    }
}

export {User, Employee};