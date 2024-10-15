describe('Add New Vet - POST Request', () => {
    it('should add a new vet and return 201 Created', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:9966/petclinic/api/vets', 
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            "firstName": "James",  
            "lastName": "Carter",
            "specialties": [
              {
                "name": "radiology"
              }
            ]
          }
        }).then((response) => {
         
          expect(response.status).to.eq(201);
    
          expect(response.body).to.have.property('firstName', 'James');
          expect(response.body).to.have.property('lastName', 'Carter');
          expect(response.body.specialties[0]).to.have.property('name', 'radiology');
          expect(response.body).to.have.property('id'); 
        });
      });
  
      it('should return 400 Bad Request for invalid vet data', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:9966/petclinic/api/vets',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            "firstName": null, 
            "lastName": "Carter",
            "specialties": [
              {
                "name": "radiology"
              }
            ]
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
  