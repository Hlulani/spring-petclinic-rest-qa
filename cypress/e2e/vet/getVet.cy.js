describe('Get Vet by ID - GET Request', () => {
    describe('Get Vet by ID - GET Request', () => {
        it('should return the vet details with status 200 OK', () => {
          cy.request({
            method: 'GET',
            url: 'http://localhost:9966/petclinic/api/vets/1', 
            failOnStatusCode: false, 
          }).then((response) => {
            
            expect(response.status).to.eq(200);
      
           
            expect(response.body).to.have.property('firstName', 'James');
            expect(response.body).to.have.property('lastName', 'Carter');
            expect(response.body).to.have.property('id', 1);
      
            
            if (response.body.specialties && response.body.specialties.length > 0) {
              expect(response.body.specialties[0]).to.have.property('name', 'radiology');
            } else {
              cy.log('Specialties array is missing or empty.');
            }
          });
        });
      });
      
  
    it('should return 404 Not Found for non-existing vet', () => {
      cy.request({
        method: 'GET',
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
          method: 'GET',
          url: 'http://localhost:9966/petclinic/api/vets/invalidId', 
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
  