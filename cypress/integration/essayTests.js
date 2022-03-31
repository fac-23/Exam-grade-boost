describe("It should allow the user to write sections of the essay and revisit it", () => {
  let randomString = Math.random().toString(16).slice(8);

  function logIn() {
    cy.visit("/login");
    cy.get("input[id='email']").type("testing@testing");
    cy.get("input[id='password']").type("testing");
    cy.get("button").contains("Log in").click();
  }

  it("It should allow the enter the essay question and revisit it", () => {
    // log in
    logIn();

    cy.url().should("include", "/home");
    cy.getCookie("sid").should("exist");

    // enter the essay question and checking it is rendered on the next page
    cy.get("a").contains("Create new Essay").click();
    cy.get("input[name='question']").type(`My question ${randomString}`);
    cy.get("button").contains("Save and continue").click();
    cy.get("h1").should("contain", `My question ${randomString}`);
  });

  it("Should allow the user to fill in the introduction fields and revisit them", () => {
    logIn();
    cy.get("button").contains("Edit").first().click();
    cy.get("button").contains("Introduction").click();
  });
});
