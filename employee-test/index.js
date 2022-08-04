const Employee = (name, wfh) => {
  getWfh = () => wfh;
  sayHello = () => `Hi my name is ${name}`;
  return { name, getWfh, sayHello };
};

const Dept = (deptName) => {
  const employees = [];
  const getStatus = (method) => employees.every((e) => `${e}.${method}()`);
  // const greetingAll = (method) => employees.map((e) => e[method]());
  const greetingAll = (method) => employees.map(method);
  return { employees, getStatus, greetingAll };
};

const employee1 = Employee('John Smith', true);
const employee2 = Employee('Jane Doe', false);
const employee3 = Employee('Mary Jane', true);
const hr = Dept('Human Resources');
hr.employees.push(employee1);
hr.employees.push(employee2);
hr.employees.push(employee3);

console.log(hr.employees);
const greetingArr1 = hr.employees.map((e) => e.sayHello());
console.log(greetingArr1);
const wfhStatus = hr.getStatus(getWfh);
// console.log(wfhStatus);
// true
const greetingArr2 = hr.greetingAll((e) => e.sayHello());
console.log(greetingArr2);
// ['[object Object],[object Object],[object Object].() => `Hi my name is {name}`()']
