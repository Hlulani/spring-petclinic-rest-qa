describe('Add New Pet Owner - POST Request', () => {
    it('should add a new pet owner and return 201 Created', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:9966/petclinic/api/owners', 
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: {
          "firstName": "Sarah",  
          "lastName": "Johnson",
          "address": "123 New Address",
          "city": "Springfield",
          "telephone": "1234567890"
        }
      }).then((response) => {
        
        expect(response.status).to.eq(201);
  
       
        expect(response.body).to.have.property('firstName', 'Sarah');
        expect(response.body).to.have.property('lastName', 'Johnson');
        expect(response.body).to.have.property('address', '123 New Address');
        expect(response.body).to.have.property('city', 'Springfield');
        expect(response.body).to.have.property('telephone', '1234567890');
        expect(response.body).to.have.property('id'); 
      });
    });
  
    it('should return 400 Bad Request for invalid data', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:9966/petclinic/api/owners',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            "firstName": null,  
            "lastName": "Johnson",
            "address": "123 New Address",
            "city": "Springfield",
            "telephone": "1234567890"
          },
          failOnStatusCode: false, 
        }).then((response) => {
          
          expect(response.status).to.eq(400);
      
         
          cy.log(JSON.stringify(response.body));
      
          if (response.body && response.body !== '') {
            expect(response.body).to.have.property('className');
            expect(response.body).to.have.property('exMessage');
          } else {
            cy.log('No error message returned.');
          }
        });
      });
      
  });
  