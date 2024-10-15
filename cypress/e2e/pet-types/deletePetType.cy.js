describe('Delete Pet Type - DELETE Request', () => {
    it('should delete the pet type if it exists and return 204 No Content', () => {
        
        cy.request({
          method: 'GET',
          url: 'http://localhost:9966/petclinic/api/pettypes/5',
          failOnStatusCode: false, 
        }).then((response) => {
          if (response.status === 200) {
            
            cy.request({
              method: 'DELETE',
              url: 'http://localhost:9966/petclinic/api/pettypes/5', 
              headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: {
                "name": "hamster", 
                "id": 1
              },
              failOnStatusCode: false, 
            }).then((deleteResponse) => {
             
              expect(deleteResponse.status).to.eq(204);
            });
          } else if (response.status === 404) {
            
            cy.log('Pet type not found, nothing to delete.');
          } else {
            throw new Error(`Unexpected status code: ${response.status}`);
          }
        });
      });
  
      it('should return 404 when deleting a non-existing pet type', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:9966/petclinic/api/pettypes/9999', 
          failOnStatusCode: false, 
        }).then((response) => {
          
          expect(response.status).to.eq(404);
      
          if (response.body && response.body !== '') {
            expect(response.body).to.have.property('error', 'Not Found');
            expect(response.body).to.have.property('message').that.contains('Pet type not found');
          } else {
            cy.log('Response body is empty, as expected for 404.');
          }
        });
      });
      
  
      it('should return 500 for an invalid delete request', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:9966/petclinic/api/pettypes/invalidId', // Invalid ID format
          failOnStatusCode: false, // Allows handling 500 response
        }).then((response) => {
          
          expect(response.status).to.eq(500);
      
          if (response.body && response.body !== '') {
        
            expect(response.body).to.have.property('className');
            expect(response.body).to.have.property('exMessage');
          } else {
            cy.log('No error message returned.');
          }
        });
      });
      
      
  });
  