describe("has a functioning Pokemon page", () => {
  it("can visit the pokemon page", () => {
    cy.visit("http://localhost:3000/pokemon");

    cy.contains("Search for a Pokemon");
    cy.get("input").should("have.attr", "placeholder", "Find Your Pokemon");
    cy.get("input[type='submit']").contains("Submit");
  });

  it("can navigate to the pokemon page from the home page", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Welcome to My Pokemon App!");

    cy.get("a").contains("Pokemon").click();
    cy.url().should("eq", "http://localhost:3000/pokemon");

    cy.contains("Search for a Pokemon");

    cy.get("input").should("have.attr", "placeholder", "Find Your Pokemon");
    cy.get("input[type='submit']").contains("Submit");
  });

  it("has a NavBar", () => {
    cy.hasNavBar();
  });

  it("can type in a pokemon's name, search for the pokemon, and show the results", () => {
    cy.get("input[type='text']").type("pikachu");
    cy.get("input[type='submit'").click();

    cy.contains("pikachu");
    cy.wait(2000);
    cy.contains("ID: 25");
    cy.get("img")
      .last()
      .should(
        "have.attr",
        "src",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      );
  });

  it("can type in an invalid name and return Not Found", () => {
    cy.get("input[type='text']").type("Karolin Rafalski");
    cy.get("input[type='submit'").click();

    cy.contains("Pokemon not found!");
  });
});
