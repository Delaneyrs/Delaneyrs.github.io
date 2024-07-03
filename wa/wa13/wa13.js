//problem 1
const employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];
console.log("Problem 1:", employees);

//problem 2
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
};
console.log("Problem 2:", company);

//problem 3
const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);
console.log("Problem 3:", company);

//problem 4
let totalSalary = company.employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Problem 4: Total Salary:", totalSalary);

//problem 5
function applyRaises(company) {
    company.employees.forEach(employee => {
        if (employee.raiseEligible) {
            employee.salary *= 1.10;
            employee.raiseEligible = false;
        }
    });
}
applyRaises(company);
console.log("Problem 5:", company);

//problem 6
const workFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
    employee.wfh = workFromHome.includes(employee.firstName);
});
console.log("Problem 6:", company);

