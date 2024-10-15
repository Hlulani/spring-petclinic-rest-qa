describe('Create Pet Type - POST Request', () => {
    it('should create a new pet type and return 201 Created', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:9966/petclinic/api/pettypes',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: {
          "name": "cat"  
        },
        failOnStatusCode: false, 
      }).then((response) => {
        
        expect(response.status).to.eq(201);
  
        expect(response.body).to.have.property('name', 'cat');
        expect(response.body).to.have.property('id'); 
      });
    });
  
    it('should return 400 Bad Request for invalid data', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:9966/petclinic/api/pettypes',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            "name": null 
          },
          failOnStatusCode: false,
        }).then((response) => {
         
          expect(response.status).to.eq(400);
      
          cy.log(JSON.stringify(response.body));
      
          if (response.body && response.body.schemaValidationErrors) {
            expect(response.body.schemaValidationErrors[0]).to.have.property('message');
          } else {
            cy.log('No schema validation errors found in response.');
          }
        });
      });
      
  });
  