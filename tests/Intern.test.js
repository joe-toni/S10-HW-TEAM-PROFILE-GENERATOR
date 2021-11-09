const Intern = require('../lib/Intern');

describe("Testing the Intern Object Initialization", function()
{
    it("Checking for Inhereted properties", function()
    {
        const trialIntern = new Intern("toni", "00", "joefaburrieta@gmail.com", "ssu");
        expect(trialIntern.name).toEqual("toni");
        expect(trialIntern.id).toEqual("00");
        expect(trialIntern.email).toEqual("joefaburrieta@gmail.com");
    });
    it("Checking for new Intern property school", function()
    {
        const trialIntern = new Intern("toni", "00", "joefaburrieta@gmail.com", "ssu");
        expect(trialIntern.school).toEqual("ssu");

    });
    it("Checking for Inhereted methods", function()
    {
        const trialIntern = new Intern("toni", "00", "joefaburrieta@gmail.com", "ssu");
        expect(trialIntern.getName()).toEqual("toni");
        expect(trialIntern.getId()).toEqual("00");
        expect(trialIntern.getEmail()).toEqual("joefaburrieta@gmail.com");
    });
    it("Testing the Intern Object's new getSchool method", function()
    {
        const trialIntern = new Intern("toni", "00", "joefaburrieta@gmail.com", "ssu");
        expect(trialIntern.getSchool()).toEqual("ssu");
    });
    it("Testing the Intern Object's overwritten getRole method", function()
    {
        const trialIntern = new Intern("toni", "00", "joefaburrieta@gmail.com", "ssu");
        expect(trialIntern.getRole()).toEqual("Intern");
    });
});