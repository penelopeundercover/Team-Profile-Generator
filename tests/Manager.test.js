const Manager = require("./Manager");

it("Should add employee's office number using this.officeNumber.", () => {
  const testValue = "office";
  const employee = new Manager(
    "Greta",
    14,
    "ggarbo@team.com",
    testValue,
    "Manager"
  );
  expect(employee.officeNumber).toBe(testValue);
});

it("Should return employee's office number via getOfficeNumber()", () => {
  const testValue = "office";
  const employee = new Manager(
    "Greta",
    14,
    "ggarbo@team.com",
    testValue,
    "Manager"
  );
  expect(employee.getOfficeNumber()).toBe(testValue);
});

it("Should return employee's role via getRole()", () => {
  const testValue = "Manager";
  const employee = new Manager("Greta", 14, "ggarbo@team.com", 33, testValue);
  expect(employee.getRole()).toBe(testValue);
});
