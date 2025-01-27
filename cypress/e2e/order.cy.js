import {
  enterName,
  selectExtras,
  selectSize,
  selectThickness,
} from "../utils/orderFormHelper";

describe("order form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("initializes with disabled button", () => {
    cy.get('[data-testid="submit-button"]').should("be.disabled");
  });

  it("prevents selecting more than 10 extras", () => {
    selectExtras(10);

    cy.get('[data-testid="extra-input"]').each((checkbox, index) => {
      if (index >= 10) {
        cy.wrap(checkbox).should("be.disabled");
      }
    });
  });

  describe("with valid values", () => {
    beforeEach(() => {
      selectSize("small");
      selectThickness("thin");
      enterName("example");
      selectExtras(7);
    });

    it("allows submitting", () => {
      cy.get('[data-testid="submit-button"]').should("not.be.disabled");
    });

    it("redirects user on successful submit", () => {
      cy.get('[data-testid="submit-button"]').click();
      cy.url().should("include", "/success");
    });
  });

  describe("prevents submitting", () => {
    it("without size selection", () => {
      selectThickness();
      enterName();
      selectExtras();
      cy.get('[data-testid="submit-button"]').should("be.disabled");
    });

    it("without thickness selection", () => {
      selectSize();
      enterName();
      selectExtras();
      cy.get('[data-testid="submit-button"]').should("be.disabled");
    });

    it("with invalid name", () => {
      selectSize();
      selectThickness();
      enterName("ab");
      selectExtras();
      cy.get('[data-testid="submit-button"]').should("be.disabled");
    });

    it("without extra selection", () => {
      selectSize();
      selectThickness();
      enterName();
      cy.get('[data-testid="submit-button"]').should("be.disabled");
    });

    it("with 3 extra selection", () => {
      selectSize();
      selectThickness();
      enterName();
      selectExtras(3);
      cy.get('[data-testid="submit-button"]').should("be.disabled");
    });
  });
});
