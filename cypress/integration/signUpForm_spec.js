function stubSignupSuccess() {
    cy.intercept({
        method: 'POST',
        url: '**/api/users',
    }, {
        "user": {
            "email": "john@example.com",
            "username": "John",
            "bio": null,
            "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
            "token": "xyz"
        }
    });

    cy.intercept({
            method: 'GET',
            url: '**/api/tags',
        }, {
            "tags": ["OMG ;)"]
        }
    );

    cy.intercept({
            method: 'GET',
            url: '/api/articles/feed?limit=10&offset=0',
        },
        {"articles": [], "articlesCount": 0}
    )
}

function stubSignupFailure() {
    cy.intercept({
        method: 'POST',
        url: '**/api/users',
    }, {
        "user": {
            "email": "john@example.com",
            "username": "John",
            "bio": null,
            "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
            "token": "xyz"
        }
    });
}


describe("SignUp Form", () => {

    it('Redirect on register success', () => {
        stubSignupSuccess(cy);
        cy.visit('/register');

        cy.get("input[type=text]").type('John');
        cy.get("input[type=email]").type('john@example.com');
        cy.get("input[type=password]").type('123');

        cy.get('form').submit();

        cy.contains('OMG ;)'); // from /api/tags
        cy.contains('No articles are here... yet.'); // from /api/articles/feed?limit=10&offset=0 returning no articles.
    });

    it.skip('Shows an error if missing email', () => {
        /*
           TODO: currently broken at https://demo.realworld.io/#/register

                 The API returns a 500 error:
                    "Cannot read property 'trim' of undefined"
         */
        // stubSignupSuccess(cy);
        cy.visit('/register');

        cy.get("input[type=text]").type('John');
        // cy.get("input[type=email]").type('john@example.com');
        cy.get("input[type=password]").type('123');

        cy.get('form').submit();

        // TODO: assert error message here
    });

});
