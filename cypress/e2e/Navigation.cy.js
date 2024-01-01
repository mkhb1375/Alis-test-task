describe("Navigation Tests", () => {
  it("Visits /users", () => {
    cy.visit(Cypress.env("baseUrl") + "/users");
  });

  it("Visits /products", () => {
    cy.visit(Cypress.env("baseUrl") + "/products");
  });

  it("Visits /verification", () => {
    cy.visit(Cypress.env("baseUrl") + "/verification");
  });
});
