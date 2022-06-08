const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should be able to set a school name when passed in as a constructor argument", () => {
    const school = "NYU";
    const newIntern = new Intern(
      "SAAD",
      "ID0000",
      "template@gmail.com",
      school
    );

    expect(newIntern.school).toEqual(school);
  });

  describe("getSchool", () => {
    it("should be able to retrieve an Intern's school name", () => {
      const school = "UIUC";
      const newIntern = new Intern(
        "SAAD",
        "ID0000",
        "template@gmail.com",
        school
      );

      expect(newIntern.getSchool()).toEqual(school);
    });
  });

  describe("getRole", () => {
    it("should be able to retrieve the job title of the employee", () => {
      const title = "Intern";
      const newIntern = new Intern(
        "SAAD",
        "ID0000",
        "template@gmail.com",
        "NYU"
      );

      expect(newIntern.getRole()).toEqual(title);
    });
  });
});