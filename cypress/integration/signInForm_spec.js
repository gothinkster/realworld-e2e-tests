function stubSuccess(cy) {
    cy.intercept({
            method: 'POST',
            url: '**/api/users/login',
        },
        {
            statusCode: 200,
            body: {
                "user": {
                    "email": "user@example.com",
                    "username": "John Doe",
                    "bio": null,
                    "image": null,
                    "token": "123"
                }
            }
        }
    ).as('loginSuccess');
}

function stubFailure(cy) {
    cy.intercept({
            method: 'POST',
            url: '**/api/users/login',
        },
        {
            statusCode: 403,
            body: {"errors": {"email or password": ["is invalid"]}}
        }
    ).as('loginFailure');
}

describe("SignIn Form", () => {

    it("Shows an error on auth failure", () => {
        cy.visit("/login");
        cy.location('hash').should('eq', '#/login');

        stubFailure(cy);

        cy.fixture('credentials').then((params) => {
            cy.contains('Sign in').should("be.visible");

            cy.get("input[placeholder=Email]").type(params.email);
            cy.get("input[placeholder=Password]").type(params.password + '{ENTER}');

            cy.location('hash').should('eq', '#/login');
            cy.contains('email or password is invalid');
        });

    });

    it("Redirects to / on auth success", () => {
        cy.visit("/login");
        cy.location('hash').should('eq', '#/login');

        stubSuccess(cy);

        cy.fixture('credentials').then((params) => {
            cy.contains('Sign in').should("be.visible");

            cy.get("input[placeholder=Email]").type(params.email);
            cy.get("input[placeholder=Password]").type(params.password + '{ENTER}');

            cy.location('hash').should('eq', '#/');
            cy.contains('John Doe');
        });

    })
});
