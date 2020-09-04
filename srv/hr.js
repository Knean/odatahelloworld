const cds = require('@sap/cds')
const employee = cds.entities;

module.exports = function () {
    // Register your event handlers in here, e.g....
    this.after('READ', 'employees', req => {
        console.debug(req, "shit")
    })
    this.after('CREATE', 'employees', (req) => {
        console.debug(req, "crap")
        query = 
            UPDATE(employee) .set ({
            salary:{'+=':69},
            
            }) .where ({ID:'9b44fee1-356f-43bf-bf50-ac415c267902'})
        cds.run(query)
        

    })
}