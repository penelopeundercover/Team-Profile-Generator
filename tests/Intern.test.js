const Intern = require("./Intern");

it("Should add employee's school using this.school.", () => {
  const testValue = "school";
  const employee = new Intern(
    "Charlie",
    94,
    "chanson@team.com",
    testValue,
    "Intern"
  );
  expect(employee.school).toBe(testValue);
});

it("Should return employee's school via getSchool()", () => {
  const testValue = "school";
  const employee = new Intern(
    "Charlie",
    94,
    "chanson@team.com",
    testValue,
    "Intern"
  );
  expect(employee.school).toBe(testValue);
});

it("Should return employee's role via get Role()", () => {
  const testValue = "Intern";
  const employee = new Intern(
    "Charlie",
    94,
    "chanson@team.com",
    "Oregon State University",
    testValue
  );
  expect(employee.getRole()).toBe(testValue);
});
