describe("Home", () => {
  it("Check fields", () => {
    cy.visit("/");
    cy.get("div.banner").should("be.visible");
    cy.get("div.sidebar").should("be.visible");
    cy.get("article-list div.article-preview").should("be.visible");
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
