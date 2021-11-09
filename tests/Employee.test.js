const Employee = require('../lib/Employee');

describe("Testing the Employee Object Initialization", function()
{
    it("Checking for property values", function()
    {
        const trialEmployee = new Employee("toni", "00", "joefaburrieta@gmail.com");
        expect(trialEmployee.name).toEqual("toni");
        expect(trialEmployee.id).toEqual("00");
        expect(trialEmployee.email).toEqual("joefaburrieta@gmail.com");
    });
    it("Testing the Employee Object's getName method", function()
    {
        const trialEmployee = new Employee("toni", "00", "joefaburrieta@gmail.com");
        expect(trialEmployee.getName()).toEqual("toni");
    });
    it("Testing the Employee Object's getId method", function()
    {
        const trialEmployee = new Employee("toni", "00", "joefaburrieta@gmail.com");
        expect(trialEmployee.getId()).toEqual("00");
    });
    it("Testing the Employee Object's getEmail method", function()
    {
        const trialEmployee = new Employee("toni", "00", "joefaburrieta@gmail.com");
        expect(trialEmployee.getEmail()).toEqual("joefaburrieta@gmail.com");
    });
    it("Testing the Employee Object's getRole method", function()
    {
        const trialEmployee = new Employee("toni", "00", "joefaburrieta@gmail.com");
        expect(trialEmployee.getRole()).toEqual("Employee");
    });
});