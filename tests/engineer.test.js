const Engineer = require("../lib/engineer"); 

describe("Engineer", () => {
    it("should be able to set a github account when passed in as a constructor argument", () => {
      const github = "SDMNNY";
      const newEngineer = new Engineer(
        "SAAD",
        "ID0000",
        "template@gmail.com",
        github
      );
  
      expect(newEngineer.github).toEqual(github);
    });
  
    describe("getGithub", () => {
      it("should be able to retrieve an engineer's github user name", () => {
        const githubUser = "SDMNNY";
        const newEngineer = new Engineer(
          "SAAD",
          "ID0000",
          "template@gmail.com",
          githubUser
        );
  
        expect(newEngineer.getGithub()).toEqual(githubUser);
      });
    });
  
    describe("getRole", () => {
      it("should be able to retrieve the job title of the employee", () => {
        const title = "Engineer";
        const newEngineer = new Engineer(
          "SAAD",
          "ID0000",
          "template@gmail.com",
          "SDMNNY"
        );
  
        expect(newEngineer.getRole()).toEqual(title);
      });
    });
  });
