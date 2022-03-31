describe("It should allow the user to write sections of the essay and revisit it", () => {
  let randomString = Math.random().toString(16).slice(8);

  // function to log in
  function logIn() {
    cy.visit("/login");
    cy.get("input[id='email']").type("testing@testing");
    cy.get("input[id='password']").type("testing");
    cy.get("button").contains("Log in").click();
  }

  function fillAllTxtAreas(section) {
    let txtAreasArr = cy.get("textarea");
    txtAreasArr.each((el) => cy.wrap(el).type(randomString));

    cy.get("button").contains("Save and continue").click();

    cy.get("button").contains(section).click();

    let filledTxtAreasArray = cy.get("textarea");
    filledTxtAreasArray.each((el) =>
      cy.wrap(el).should("have.text", randomString)
    );
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

  // introduction section
  it("Should allow the user to fill in the introduction fields and revisit them", () => {
    logIn();
    cy.get("button").contains("Edit").first().click();
    cy.get("button").contains("Introduction").click();

    // loop over elements and perform same action on all of them and check the values are there when you come back
    fillAllTxtAreas("Introduction");
  });

  // paragraph 1
  it.only("Should allow the user to fill in the body paragraph 1 fields and revisit them", () => {
    logIn();
    cy.get("button").contains("Edit").first().click();
    cy.get("button").contains("Body paragraph 1").click();

    fillAllTxtAreas("Body paragraph 1");
  });
});
