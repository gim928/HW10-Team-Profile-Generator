// pull employee code
const Intern = require("../types/intern");

test("should return true", () => {
  let employee1 = new Intern("Gary", 1, "g@gmail.com");

  expect(employee1.name).toBe("Gary");
  expect(employee1.id).toBe(1);
  expect(employee1.email).toBe("g@gmail.com");
});

test("gets employee id", () => {
  let employee = new Intern("Gary", 1, "g@gmail.com");

  expect(employee.getID()).toEqual(expect.any(Number));
});

test("gets employee email", () => {
  let employee = new Intern("Gary", 1, "g@gmail.com");

  expect(employee.getEmail()).toContain(".com");
});
test("gets role from employee", () => {
  let employee = new Intern("Gary", 1, "g@gmail.com");

  expect(employee.getRole()).toEqual("Intern");
});
