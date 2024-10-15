describe('Update Pet Owner - PUT Request', () => {
    describe('Update Pet Owner - PUT Request', () => {
        it('should update the pet owner details and return 204 No Content', () => {
          cy.request({
            method: 'PUT',
            url: 'http://localhost:9966/petclinic/api/owners/1', 
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: {
              "firstName": "George",  
              "lastName": "Franklin",
              "address": "110 W. Liberty St.",
              "city": "Madison",
              "telephone": "6085551023"
            },
            failOnStatusCode: false, 
          }).then((response) => {
            
            expect(response.status).to.eq(204);
          });
        });
      });
      
  
      it('should return 400 Bad Request for invalid data', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:9966/petclinic/api/owners/1',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            "firstName": null, 
            "lastName": "Franklin",
            "address": "110 W. Liberty St.",
            "city": "Madison",
            "telephone": "6085551023"
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
      
  
    
    it('should return 404 Not Found for a non-existing owner ID', () => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:9966/petclinic/api/owners/9999', 
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: {
          "firstName": "George",  
          "lastName": "Franklin",
          "address": "110 W. Liberty St.",
          "city": "Madison",
          "telephone": "6085551023"
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
  