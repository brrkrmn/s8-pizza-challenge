export const selectSize = (size = "small") => {
  cy.get('[data-testid="size-input"]').filter(`[value=${size}]`).check();
};

export const selectThickness = (thickness = "thin") => {
  cy.get('[data-testid="thickness-input"]').select(thickness);
};

export const enterName = (name = "Test Name") => {
  cy.get('[data-testid="name-input"]').type(name);
};

export const selectExtras = (extraCount = 4) => {
  cy.get('[data-testid="extra-input"]').each((checkbox, index) => {
    if (index < extraCount) {
      cy.wrap(checkbox).check();
    }
  });
};
