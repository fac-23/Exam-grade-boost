beforeEach(() => {
  cy.task("resetDb");
});

// use before instead of before each?

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

    cy.url().should("include", "/home");
    cy.getCookie("sid").should("exist");
  });

  it("Should allow the user to log in and visit protected pages", () => {
    cy.log("LOGIN randomUsername", randomUsername);

    cy.visit("login");
    cy.get("input[id='email']").type(`${randomUsername}@test`);
    cy.get("input[id='password']").type(`${randomUsername}`);
    cy.get("button").contains("Log in").click();

    cy.url().should("include", "home");
    cy.getCookie("sid").should("exist");

    cy.visit("/home");
  });

  // it("Should allow authenticated user to view protected pages", () => {
  // });

  it("Should allow the user to log out", () => {
    cy.get("button[id='logout']").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("Should not allow a non-authenticated user to access protected pages", () => {
    cy.visit("/home");
    cy.get("h1").contains("Access denied");

    // cy.visit("/myprofile");
    // cy.get("h1").contains("Access denied");

    // cy.visit("/resources");
    // cy.get("h1").contains("Access denied");

    // cy.visit("/spiderDiagram");
    // cy.get("h1").contains("Access denied");

    // cy.visit("/introduction");
    // cy.get("h1").contains("Access denied");

    // cy.visit("/body");
    // cy.get("h1").contains("Access denied");

    // cy.visit("/conclusion");
    // cy.get("h1").contains("Access denied");

    // cy.visit("/essayOverview");
    // cy.get("h1").contains("Access denied");

    // cy.visit("/finalEssay");
    // cy.get("h1").contains("Access denied");
  });
});
