const Engineer = require('../lib/Engineer');

describe("Testing the Engineer Object Initialization", function()
{
    it("Checking for Inhereted properties", function()
    {
        const trialEngineer = new Engineer("toni", "00", "joefaburrieta@gmail.com", "joe-toni");
        expect(trialEngineer.name).toEqual("toni");
        expect(trialEngineer.id).toEqual("00");
        expect(trialEngineer.email).toEqual("joefaburrieta@gmail.com");
    });
    it("Checking for new Engineer property github", function()
    {
        const trialEngineer = new Engineer("toni", "00", "joefaburrieta@gmail.com", "joe-toni");
        expect(trialEngineer.github).toEqual("joe-toni");

    });
    it("Checking for Inhereted methods", function()
    {
        const trialEngineer = new Engineer("toni", "00", "joefaburrieta@gmail.com", "joe-toni");
        expect(trialEngineer.getName()).toEqual("toni");
        expect(trialEngineer.getId()).toEqual("00");
        expect(trialEngineer.getEmail()).toEqual("joefaburrieta@gmail.com");
    });
    it("Testing the Engineer Object's new getGithub method", function()
    {
        const trialEngineer = new Engineer("toni", "00", "joefaburrieta@gmail.com", "joe-toni");
        expect(trialEngineer.getGithub()).toEqual("joe-toni");
    });
    it("Testing the Engineer Object's overwritten getRole method", function()
    {
        const trialEngineer = new Engineer("toni", "00", "joefaburrieta@gmail.com", "joe-toni");
        expect(trialEngineer.getRole()).toEqual("Engineer");
    });
});