describe("Login", () => {
  it("should log in users", () => {
    cy.visit("http://localhost:5173/login");

    cy.env(["fakeEmail"]).then(({ fakeEmail }) => {
      cy.get("input[name='email']").type(fakeEmail);
    });
    cy.env(["fakePassword"]).then(({ fakePassword }) => {
      cy.get('input[name="password"]').type(fakePassword);
    });

    cy.get("button[type='submit']:first-child").click();
    cy.contains("Logged in successfully!");
  });
});
