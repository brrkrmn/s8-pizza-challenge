describe("success page", () => {
  beforeEach(() => {
    cy.submitForm();
  });

  it("is rendered after successful submission", () => {
    cy.location("pathname").should("eq", "/success");
  });

  it("correctly shows order details", () => {
    cy.contains("Boyut: S").should("be.visible");
    cy.contains("Hamur: İnce").should("be.visible");
    cy.contains("Pepperoni").should("be.visible");
    cy.contains("Tavuk Izgara").should("be.visible");
  });

  it("redirects to home page on refresh", () => {
    cy.reload();
    cy.location("pathname").should("eq", "/");
  });
});

it("redirects to home page when visited without ordering", () => {
  cy.visit("http://localhost:5173/success");
  cy.location("pathname").should("eq", "/");
});
