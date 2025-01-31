describe("order form validation", () => {
  beforeEach(() => {
    cy.visit("/order");
  });

  it("shows error message unless size is selected", () => {
    cy.get('[data-testid="size-error"]').should("be.visible");
    cy.selectSize();
    cy.get('[data-testid="size-error"]').should("not.be.visible");
  });

  it("shows error message unless thickness is selected", () => {
    cy.get('[data-testid="thickness-error"]').should("be.visible");
    cy.selectThickness();
    cy.get('[data-testid="thickness-error"]').should("not.be.visible");
  });

  it("shows error message unless 4 extras are selected", () => {
    cy.get('[data-testid="extras-error"]').should("be.visible");
    cy.selectExtras(4);
    cy.get('[data-testid="extras-error"]').should("not.be.visible");
  });

  it("shows error message when 10 extras are selected", () => {
    cy.selectExtras(10);
    cy.get('[data-testid="extras-error"]').should("be.visible");
  });

  it("shows error message when name under 3 character is entered", () => {
    cy.get('[data-testid="username-error"]').should("be.visible");
    cy.enterName("1234");
    cy.get('[data-testid="username-error"]').should("not.be.visible");
  });
});
