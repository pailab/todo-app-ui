describe('enjoy the assignment', () => {

    beforeEach(() => {
        cy.seedAndVisit([{
            'id': 1,
            'name': 'buy some milk',
            'isCompleted': false
        }])
    })

    it('add new input', () => {
        const itemText = 'enjoy the assignment'

        cy.server()
        cy.route('POST', '/tasks', {
            name: itemText,
            id: 2,
            isComplete: false
        })

        cy.get('.new-todo')
            .type(itemText)
            .type('{enter}')
            .should('have.value', '')
    })
})