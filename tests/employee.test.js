const Employee = require("../lib/employee");

describe("Employee", () => {
    it("should create a new employee object", () => {
      const newEmployee = new Employee();
      expect(typeof newEmployee).toEqual("object");
    });
  
    it("should be able to set a name value when passed in as a constructor argument", () => {
      const employeeName = "SAAD";
      const newEmployee = new Employee(employeeName);
      expect(newEmployee.name).toEqual(employeeName);
    });
  
    it("should be able to set a id value when passed in as a constructor argument", () => {
      const employeeId = "ID0000";
      const newEmployee = new Employee("SAAD", employeeId);
      expect(newEmployee.id).toEqual(employeeId);
    });
  
    it("should be able to set an email value when passed in as a constructor argument", () => {
      const employeeEmail = "template@gmail.com";
      const newEmployee = new Employee("Saad", "ID0000", employeeEmail);
      expect(newEmployee.email).toEqual(employeeEmail);
    });
  
    describe("getName", () => {
      it("should be able to retrieve the employee's name value from an employee object", () => {
        const nameVal = "SAAD";
        const newEmployee = new Employee(nameVal);
  
        expect(newEmployee.getName()).toEqual(nameVal);
      });
    });
  
    describe("getId", () => {
      it("should be able to retrieve the employee's id value from an employee object", () => {
        const idVal = "ID0000";
        const newEmployee = new Employee("SAAD", idVal);
  
        expect(newEmployee.getId()).toEqual(idVal);
      });
    });
  
    describe("getEmail", () => {
      it("should be able to retrieve the employee's email value from an employee object", () => {
        const emailVal = "template@gmail.com";
        const newEmployee = new Employee("SAAD", "ID0000", emailVal);
  
        expect(newEmployee.getEmail()).toEqual(emailVal);
      });
    });
  
    describe("getRole", () => {
      it("should be able to retrieve the job title of the employee", () => {
        const title = "Employee";
        const newEmployee = new Employee(
          "SAAD",
          "ID0000",
          "template@gmail.com"
        );
  
        expect(newEmployee.getRole()).toEqual(title);
      });
    });
  });