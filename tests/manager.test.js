const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should be able to set a the office number when passed in as a constructor argument", () => {
    const officeNum = "100";
    const newManager = new Manager(
      "SAAD",
      "ID0000",
      "template@gmail.com",
      officeNum
    );

    expect(newManager.officeNum).toEqual(officeNum);
  });

  describe("officeNumber", () => {
    it("should be able to retrieve a Manager's office number", () => {
      const officeNum = "100";
      const newManager = new Manager(
        "SAAD",
        "ID0000",
        "template@gmail.com",
        officeNum
      );

      expect(newManager.officeNumber()).toEqual(officeNum);
    });
  });

  describe("getRole", () => {
    it("should be able to retrieve the job title of the employee", () => {
      const title = "Manager";
      const newManager = new Manager(
        "SAAD",
        "ID0000",
        "template@gmail.com",
        "100"
      );

      expect(newManager.getRole()).toEqual(title);
    });
  });
});