describe('Get Specialty by ID - GET Request', () => {
    it('should return the specialty details with status 200 OK', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:9966/petclinic/api/specialties/1', 
        failOnStatusCode: false, 
      }).then((response) => {
       
        expect(response.status).to.eq(200);
  
        
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('name', 'radiology');
      });
    });
  
    it('should return 404 Not Found for non-existing specialty', () => {
      cy.request({
        method: 'GET',
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
  
    it('should handle 500 Internal Server Error for invalid specialty ID', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:9966/petclinic/api/specialties/invalidId',
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
      
  
      it('should handle 500 Internal Server Error', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:9966/petclinic/api/specialties/some-server-error',
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
  