describe("Should be able to navigate to all routes", () => {
  it("Should be able to visit index page", () => {
    // this works //
    // cy.visit("/login"); // fails
    cy.visit("/"); // works
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("Should be able to visit the login page", () => {
    cy.visit("/");
    cy.get("button").contains("Log in").click();
    cy.url().should("include", "login");
  });
});
