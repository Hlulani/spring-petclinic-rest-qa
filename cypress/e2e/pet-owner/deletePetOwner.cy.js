describe('Delete Pet Owner - DELETE Request', () => {
    it('should delete the pet owner and handle 204 or 404 response', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:9966/petclinic/api/owners/1', 
          failOnStatusCode: false, 
        }).then((response) => {
          if (response.status === 204) {
           
            expect(response.status).to.eq(204);
          } else if (response.status === 404) {
           
            cy.log('Owner not found, received 404 response.');
            expect(response.status).to.eq(404);
          } else {
            throw new Error(`Unexpected status code: ${response.status}`);
          }
        });
      });
    
      
      it('should return 404 Not Found when trying to delete a non-existing owner', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:9966/petclinic/api/owners/9999', 
          failOnStatusCode: false, 
        }).then((response) => {
          
          expect(response.status).to.eq(404);
    
          
          if (response.body && response.body !== '') {
            expect(response.body).to.have.property('status', 404);
            expect(response.body).to.have.property('error', 'Not Found');
          }
        });
      });
  
      it('should handle 500 Internal Server Error for invalid owner ID', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:9966/petclinic/api/owners/invalidId', 
          failOnStatusCode: false, 
        }).then((response) => {
          
          expect(response.status).to.eq(500);
      
          
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
  