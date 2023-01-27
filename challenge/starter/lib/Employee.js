// TODO: Write code to define and export the Employee class

// Building the main constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(this.name);
        return this.name;
    }

    getId() {
        console.log(this.id);
        return this.id;
    }

    getEmail() {
        console.log(this.email);
         return this.email;
    }

    getRole() {
        console.log(Employee);
        return Employee
    }
}

const testEmployee = new Employee("Victor", 2, "victor@gmail.com")

testEmployee.getName();
testEmployee.getId();
testEmployee.getEmail();
testEmployee.getRole();