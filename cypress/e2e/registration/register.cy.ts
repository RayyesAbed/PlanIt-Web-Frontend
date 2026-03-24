describe("Registration", () => {
  it("should allow a new user to register", () => {
    cy.visit("http://localhost:5173/register");

    cy.get('input[name="name"]').type("Fake");
    cy.env(["fakeEmail"]).then(({ fakeEmail }) => {
      cy.get("input[name='email']").type(fakeEmail);
    });
    cy.env(["fakePassword"]).then(({ fakePassword }) => {
      cy.get('input[name="password"]').dblclick().type(fakePassword);
    });
    cy.get('[data-testid="language-select"]').click();
    cy.get('[data-value="en"]').click();

    cy.get('button[type="submit"]').click();
    cy.contains(
      "A verification email has been sent, please check your mailbox",
    );
  });
});
