const Engineer = require("../lib/Engineer.js");

it("Should add github username using this.github", () => {
  const testValue = "githubUser";
  const employee = new Engineer(
    "Lucy",
    23,
    "lwright@team.com",
    testValue,
    "Engineer"
  );
  expect(employee.github).toBe(testValue);
});

it("Should return employee's github username via getGithub()", () => {
  const testValue = "githubUser";
  const employee = new Employee(
    "Lucy",
    23,
    "lwright@team.com",
    testValue,
    "Engineer"
  );
  expect(employee.getGithub()).toBe(testValue);
});

it("Should return employee's role via get Role()", () => {
  const testValue = "Engineer";
  const employee = new Employee(
    "Lucy",
    23,
    "lwright@team.com",
    "lucid-lucy",
    testValue
  );
  expect(employee.getRole()).toBe(testValue);
});
