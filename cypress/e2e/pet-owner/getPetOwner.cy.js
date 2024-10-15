describe('Get Pet Owner by ID - GET Request', () => {
    it('should return 200 OK and the pet owner details for a valid ID', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:9966/petclinic/api/owners/1', 
        failOnStatusCode: false, 
      }).then((response) => {
        
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('firstName', 'George');
        expect(response.body).to.have.property('lastName', 'Franklin');
        expect(response.body).to.have.property('address', '110 W. Liberty St.');
        expect(response.body).to.have.property('city', 'Madison');
        expect(response.body).to.have.property('telephone', '6085551023');
        expect(response.body).to.have.property('id', 1); 
  
       
        expect(response.body.pets).to.be.an('array');
        if (response.body.pets.length > 0) {
          expect(response.body.pets[0]).to.have.property('name', 'Leo');
          expect(response.body.pets[0].type).to.have.property('name', 'cat');
          expect(response.body.pets[0]).to.have.property('id', 1);
        }
      });
    });
  
    
    it('should return 404 when owner ID is not found', () => {
      cy.request({
        method: 'GET',
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
  
    it('should handle 500 Internal Server Error for invalid ID', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:9966/petclinic/api/owners/invalidID', 
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
  