describe('Update Specialty by ID - PUT Request', () => {
    it('should update the specialty and return 204 No Content', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:9966/petclinic/api/specialties/1', 
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            "name": "radiology" 
          }
        }).then((response) => {
          
          expect(response.status).to.eq(204);
        });
      });
  
    it('should return 404 Not Found for non-existing specialty', () => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:9966/petclinic/api/specialties/9999', 
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: {
          "name": "radiology"
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
  
    it('should handle 500 Internal Server Error', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:9966/petclinic/api/specialties/server-error',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            "name": "radiology"
          },
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
  