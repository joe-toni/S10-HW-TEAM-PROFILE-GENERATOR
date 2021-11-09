const Manager = require('../lib/Manager');

describe("Testing the Manager Object Initialization", function()
{
    it("Checking for Inhereted properties", function()
    {
        const trialManager = new Manager("toni", "00", "joefaburrieta@gmail.com", "5327");
        expect(trialManager.name).toEqual("toni");
        expect(trialManager.id).toEqual("00");
        expect(trialManager.email).toEqual("joefaburrieta@gmail.com");
    });
    it("Checking for new Manager property officeNumber", function()
    {
        const trialManager = new Manager("toni", "00", "joefaburrieta@gmail.com", "5327");
        expect(trialManager.officeNumber).toEqual("5327");

    });
    it("Checking for Inhereted methods", function()
    {
        const trialManager = new Manager("toni", "00", "joefaburrieta@gmail.com", "5327");
        expect(trialManager.getName()).toEqual("toni");
        expect(trialManager.getId()).toEqual("00");
        expect(trialManager.getEmail()).toEqual("joefaburrieta@gmail.com");
    });
    it("Testing the Manager Object's new getOfficeNumber method", function()
    {
        const trialManager = new Manager("toni", "00", "joefaburrieta@gmail.com", "5327");
        expect(trialManager.getOfficeNumber()).toEqual("5327");
    });
    it("Testing the Manager Object's overwritten getRole method", function()
    {
        const trialManager = new Manager("toni", "00", "joefaburrieta@gmail.com", "5327");
        expect(trialManager.getRole()).toEqual("Manager");
    });
});