describe("It should allow the user to write sections of the essay and revisit it", () => {
  let randomUsername = Math.random().toString(16).slice(8);

  it("It should allow the user to write an essay and revisit it", () => {
    // sign up
    cy.visit("/signup");
    cy.get("input[id='username']").type(`${randomUsername}`);
    cy.get("input[id='email']").type(`${randomUsername}@test`);
    cy.get("input[id='password']").type(`${randomUsername}`);
    cy.get("button").contains("Sign up").click();

    cy.url().should("include", "/home");
    cy.getCookie("sid").should("exist");

    // enter the essay question and checking it is rendered on the next page
    cy.get("a").contains("Create new Essay").click();
    cy.get("input[name='question']").type("My question");
    cy.get("button").contains("Save and continue").click();
    cy.get("h1").should("contain", "My question");
  });
});
