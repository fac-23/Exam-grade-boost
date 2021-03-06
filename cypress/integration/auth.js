beforeEach(() => {
  cy.task("resetDb");
});

// use before instead of before each?

// before(() => {
//   cy.task("resetDb");
// });

describe("Should allow the user to sign up, log in, log out and only access routhes when authenticated", () => {
  // generate random user, using their name as password too
  let randomUsername = Math.random().toString(16).slice(8);

  it("Should allow the user to sign up", () => {
    cy.log("SIGNUP randomUsername", randomUsername);

    cy.visit("/signup");
    cy.get("input[id='username']").type(`${randomUsername}`);
    cy.get("input[id='email']").type(`${randomUsername}@test`);
    cy.get("input[id='password']").type(`${randomUsername}`);
    cy.get("button").contains("Sign up").click();

    cy.url().should("include", "/tutorial");
    cy.getCookie("sid").should("exist");
  });

  it("Should allow the user to log in, visit protected pages and log out", () => {
    cy.log("LOGIN randomUsername", randomUsername);

    // login
    cy.visit("login");
    cy.get("input[id='email']").type(`${randomUsername}@test`);
    cy.get("input[id='password']").type(`${randomUsername}`);
    cy.get("button").contains("Log in").click();

    cy.url().should("include", "home");
    cy.getCookie("sid").should("exist");

    cy.visit("/home");

    // create new essay
    cy.get("a").contains("Create new Essay").click();
    cy.get("input[name='question']").type(
      `Test question random user ${randomUsername}`
    );
    cy.get("button").contains("Save and continue").click();

    cy.visit("/resources");
    cy.visit("/spiderDiagram");
    cy.visit("/introduction");
    cy.visit("/body1");
    cy.visit("/body2");
    cy.visit("/body3");
    cy.visit("/conclusion");
    cy.visit("/essayOverview");
    cy.visit("/finalEssay");

    cy.visit("/home");

    cy.get("button").contains("Log out").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("Should not allow a non-authenticated user to access protected pages", () => {
    cy.visit("/home");
    cy.get("h1").contains("Access denied");

    cy.visit("/myprofile");
    cy.get("h1").contains("Access denied");

    cy.visit("/resources");
    cy.get("h1").contains("Access denied");

    cy.visit("/videos");
    cy.get("h1").contains("Access denied");

    cy.visit("/wordBank");
    cy.get("h1").contains("Access denied");

    cy.visit("/spiderDiagram");
    cy.get("h1").contains("Access denied");

    cy.visit("/introduction");
    cy.get("h1").contains("Access denied");

    cy.visit("/body1");
    cy.get("h1").contains("Access denied");

    cy.visit("/body2");
    cy.get("h1").contains("Access denied");

    cy.visit("/body3");
    cy.get("h1").contains("Access denied");

    cy.visit("/conclusion");
    cy.get("h1").contains("Access denied");

    cy.visit("/essayOverview");
    cy.get("h1").contains("Access denied");

    cy.visit("/finalEssay");
    cy.get("h1").contains("Access denied");
  });
});
