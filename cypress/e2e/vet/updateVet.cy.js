describe('Update Vet by ID - PUT Request', () => {
    it('should update the vet details and return 204 No Content', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:9966/petclinic/api/vets/1', 
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
          
          expect(response.status).to.eq(204);
    
          
        });
      });
  
      it('should return 400 Bad Request for invalid vet data', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:9966/petclinic/api/vets/1', // Replace 1 with actual vetId
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            "firstName": null,  // Invalid data (null for required field)
            "lastName": "Carter",
            "specialties": [
              {
                "name": "radiology"
              }
            ]
          },
          failOnStatusCode: false, // Allows handling the 400 response
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
      
  
    it('should return 404 Not Found for non-existing vet', () => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:9966/petclinic/api/vets/9999', 
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
        },
        failOnStatusCode: false, 
      }).then((response) => {
        
        expect(response.status).to.eq(404);
  
        
        if (response.body && response.body !== '') {
          expect(response.body).to.have.property('status', 404);
          expect(response.body).to.have.property('error', 'Not Found');
        }
      });
    });
  });
  