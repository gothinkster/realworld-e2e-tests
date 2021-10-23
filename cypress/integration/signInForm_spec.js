describe("SignIn Form", () => {
  it("Check SignIn Form fields", () => {
    cy.visit("/login");
    cy.get("input[type=email]").should("be.visible");
    cy.get("input[type=password]").should("be.visible");
    cy.get("button[type=submit]").should("be.visible");
    cy.get("div.row a[ui-sref='app.register']")
      .should("be.visible")
      .should("have.attr", "href")
      .and("contain", "register");
    cy.get("ul.nav a[ui-sref='app.login']")
      .should("be.visible")
      .should("have.attr", "href")
      .and("contain", "login");
    cy.get("ul.nav a[ui-sref='app.register']")
      .should("be.visible")
      .should("have.attr", "href")
      .and("contain", "register");
    cy.get("ul.nav a[ui-sref='app.home']")
      .should("be.visible")
      .should("have.attr", "href");
  });
});
