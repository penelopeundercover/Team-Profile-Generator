//Test 7 things: The 4 Employee.js functions, and all 3 this.statements.
const Employee = require("../lib/Employee.js");

//this statements
describe("Employee", () => {
  it("Should create an employee object with a name, id number, and email", () => {
    const employee = new Employee("Harold", 87, "hpeabody@team.com");
    expect(employee.name).toEqual("Harold");
    expect(employee.id).toEqual(87);
    expect(employee.email).toEqual("hpeabody@team.com");
  });

  //functions
  it("Should return employee's name via getName()", () => {
    const testValue = "Harold";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
  });

  it("Should return employee's id number via getId()", () => {
    const testValue = 87;
    const employee = new Employee("Doris", testValue);
    expect(employee.getId()).toBe(testValue);
  });

  it("Should return employee's email address via getEmail()", () => {
    const testValue = "hpeabody@team.com";
    const employee = new Employee("Doris", 87, testValue);
    expect(employee.getEmail()).toBe(testValue);
  });
  it("Should return 'Employee' via getRole()", () => {
    const testValue = "Employee";
    const employee = new Employee(
      "Harold",
      87,
      "hpeabody@team.com",
      "Employee"
    );
    expect(employee.getRole()).toBe(testValue);
  });
});
