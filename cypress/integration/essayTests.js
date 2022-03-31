describe("It should allow the user to write sections of the essay and revisit it", () => {
  // function to log in
  function logIn() {
    cy.visit("/login");
    cy.get("input[id='email']").type("testing@testing");
    cy.get("input[id='password']").type("testing");
    cy.get("button").contains("Log in").click();
  }

  function fillAllTxtAreas(section) {
    //generate random string
    let randomString = Math.random().toString(16).slice(8);

    let txtAreasArr = cy.get("textarea");
    txtAreasArr.each((el) => cy.wrap(el).clear().type(randomString));

    cy.get("button").contains("Save and continue").click();

    cy.get("button").contains(section).click();

    let filledTxtAreasArray = cy.get("textarea");
    filledTxtAreasArray.each((el) =>
      cy.wrap(el).should("have.text", randomString)
    );
  }

  function accessSection(section) {
    cy.get("button").contains("Edit").first().click();
    cy.get("button").contains(section).click();
  }

  it("It should allow the modify the essay question and revisit it", () => {
    // log in
    logIn();

    let randomString = Math.random().toString(16).slice(8);

    // enter the essay question and checking it is rendered on the next page
    cy.get("button").contains("Edit").first().click();
    cy.get("button").contains("Edit title").click();

    cy.get("textarea[name='question']")
      .clear()
      .type(`My question ${randomString}`);
    cy.get("button").contains("Save and continue").click();
    cy.get("h1").should("contain", `My question ${randomString}`);
  });

  // introduction section
  it("Should allow the user to fill in the introduction fields and revisit them", () => {
    logIn();

    accessSection("Introduction");

    // loop over elements and perform same action on all of them and check the values are there when you come back
    fillAllTxtAreas("Introduction");
  });

  // body paragraph 1
  it("Should allow the user to fill in the body paragraph 1 fields and revisit them", () => {
    logIn();

    accessSection("Body paragraph 1");

    fillAllTxtAreas("Body paragraph 1");
  });

  // body paragraph 2
  it("Should allow the user to fill in the body paragraph 2 fields and revisit them", () => {
    logIn();

    accessSection("Body paragraph 2");

    fillAllTxtAreas("Body paragraph 2");
  });

  // body paragraph 3
  it("Should allow the user to fill in the body paragraph 3 fields and revisit them", () => {
    logIn();

    accessSection("Body paragraph 3");

    fillAllTxtAreas("Body paragraph 3");
  });

  // conclusion
  it("Should allow the user to fill in the conclusion fields and revisit them", () => {
    logIn();

    accessSection("Conclusion");

    fillAllTxtAreas("Conclusion");
  });

  // spider diagram
  it("Should allow the user to fill in the spider diagram fields and revisit them", () => {
    logIn();

    accessSection("Planning");

    // "open" all textareas by clicking all add buttons
    let txtAreasArr = cy.get("button[type='button']");
    txtAreasArr.each((el) => cy.wrap(el).click());

    fillAllTxtAreas("Planning");
  });
});
