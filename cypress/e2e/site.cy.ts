/// <reference types="cypress" />

import {Paths} from "../support/util";

context('Site', () => {

    beforeEach(() => cy.visit(Paths.home));

    it('redirects to English by default', () => {
        // We should land in the English version
        cy.isAt(Paths.en.home);

        // There's a cookie consent bar. Close it
        cy.get('.cc-window').should('contain.text', 'This website uses cookies.').should('be.visible')
            .contains('a', 'Got it!').click();
        cy.get('.cc-window').should('not.be.visible');
    });
});
