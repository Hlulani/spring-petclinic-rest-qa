describe('Delete Specialty by ID - DELETE Request', () => {
    it('should delete the specialty and return 204 No Content or 404 Not Found', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:9966/petclinic/api/specialties/1', 
          failOnStatusCode: false, 
        }).then((response) => {
          
          if (response.status === 204) {
            expect(response.status).to.eq(204); 
          } else if (response.status === 404) {
            expect(response.status).to.eq(404); 
          } else {
            throw new Error(`Unexpected status code: ${response.status}`);
          }
        });
      });
  
    it('should return 404 Not Found for non-existing specialty', () => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:9966/petclinic/api/specialties/9999', 
        failOnStatusCode: false, 
      }).then((response) => {
        
        expect(response.status).to.eq(404);
  
        if (response.body && response.body !== '') {
          expect(response.body).to.have.property('status', 404);
          expect(response.body).to.have.property('error', 'Not Found');
        }
      });
    });
  
    it('should return 400 Bad Request or 500 Internal Server Error for invalid specialty ID', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:9966/petclinic/api/specialties/invalidId', // Invalid specialty ID format
          failOnStatusCode: false, // Allows handling non-2xx responses
        }).then((response) => {
          
          if (response.status === 400) {
            expect(response.status).to.eq(400); 
          } else if (response.status === 500) {
            expect(response.status).to.eq(500); 
          } else {
            throw new Error(`Unexpected status code: ${response.status}`);
          }
      
          
          if (response.status === 400 && response.body && response.body !== '') {
            expect(response.body).to.have.property('status', 400);
            expect(response.body).to.have.property('error', 'Bad Request');
          }
      
         
          if (response.status === 500 && response.body && response.body !== '') {
            expect(response.body).to.have.property('className');  
            expect(response.body).to.have.property('exMessage');  
          } else {
            cy.log('No error message returned for 500 response.');
          }
        });
      });
      
      
  
      it('should handle 500 Internal Server Error', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:9966/petclinic/api/specialties/server-error', 
          failOnStatusCode: false, 
        }).then((response) => {
          
          expect(response.status).to.eq(500);
      
          
          cy.log(JSON.stringify(response.body));
      
          
          if (response.body && response.body !== '') {
            expect(response.body).to.have.property('className');  
            expect(response.body).to.have.property('exMessage'); 
          } else {
            cy.log('No detailed error message returned.');
          }
        });
      });
      
  });
  