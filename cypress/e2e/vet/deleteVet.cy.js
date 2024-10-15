describe('Delete Vet by ID - DELETE Request', () => {
    it('should delete the vet and handle 204 or 404 response', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:9966/petclinic/api/vets/1', 
          failOnStatusCode: false, 
        }).then((response) => {
          if (response.status === 204) {
            
            expect(response.status).to.eq(204);
          } else if (response.status === 404) {
           
            cy.log('Vet not found, received 404 response.');
            expect(response.status).to.eq(404);
          } else {
            throw new Error(`Unexpected status code: ${response.status}`);
          }
        });
      });
  
    it('should return 404 Not Found for non-existing vet', () => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:9966/petclinic/api/vets/9999', 
        failOnStatusCode: false, 
      }).then((response) => {
       
        expect(response.status).to.eq(404);
  
        if (response.body && response.body !== '') {
          expect(response.body).to.have.property('status', 404);
          expect(response.body).to.have.property('error', 'Not Found');
        }
      });
    });
    it('should handle 500 Internal Server Error for invalid vet ID', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:9966/petclinic/api/vets/invalidId', // Invalid vet ID format
          failOnStatusCode: false, // Allows handling the 500 response
        }).then((response) => {
          // Verify the status code is 500 (Internal Server Error)
          expect(response.status).to.eq(500);
      
          // Log the response for debugging
          cy.log(JSON.stringify(response.body));
      
          // Optionally, verify error message structure if available
          if (response.body && response.body !== '') {
            expect(response.body).to.have.property('className'); // Check for className
            expect(response.body).to.have.property('exMessage'); // Check for exMessage
          } else {
            cy.log('No error message returned.');
          }
        });
      });
      
  });
  