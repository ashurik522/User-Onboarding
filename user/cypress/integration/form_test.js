describe("User onboarding app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    const fnameInput = () => cy.get("input[name=fname]");
    const lnameInput = () => cy.get("input[name=lname]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]"); 
    const termsInput = () => cy.get("input[name=terms]"); 
    const submitBtn = () => cy.get(`button[id="submitBtn"]`)


    it("sanity check to make sure tests work", () => {
 
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); 
        expect({}).to.eql({}); 
    })

    it("the proper elements are showing", () => {
        
        fnameInput().should("exist");
        lnameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        termsInput().should("exist");
        submitBtn().should("exist");
    })

    describe("filling out inputs and submitting", () => {

        it("can navigate to the site", () => {
            cy.url().should("include", "localhost")
        })

        it("submit button is disabled at start", () => {
            submitBtn().should("be.disabled")
        })

        it("can type in the inputs", () => {
            fnameInput()
                .should("have.value", "")
                .type("Drew")
                .should("have.value", "Drew")
            lnameInput()
                .should("have.value", "")
                .type("Drew")
                .should("have.value", "Drew")
            emailInput()
                .should("have.value", "")
                .type("Drew@email.com")
                .should("have.value", "Drew@email.com")
            passwordInput()
                .should("have.value", "")
                .type("asdf1234")
                .should("have.value", "asdf1234")
            termsInput()
                .should("not.be.checked")
                .check()
                .should("be.checked")
        })

        it("submit button enables when all inputs are filled out", () => {
            fnameInput().type("Drew")
            lnameInput().type("Shurik")
            emailInput().type("Drew@email.com")
            passwordInput().type("asdf1234")
            termsInput().check()
            submitBtn().should("not.be.disabled")
        })

    })









})