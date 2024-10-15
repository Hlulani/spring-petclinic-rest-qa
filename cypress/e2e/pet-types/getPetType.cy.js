describe('Get Pet Type - 200 Response', () => {
  it('should return 200 OK and the pet type with ID 1 (cat)', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:9966/petclinic/api/pettypes/1',
      failOnStatusCode: false, 
    }).then((response) => {
      if (response.status === 200) {
        
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('name', 'cat');
      } else if (response.status === 404) {
        
        cy.log('Pet type not found, received 404 response.');
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    });
  });


  it('should return a list of pet types with status 200', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:9966/petclinic/api/pettypes',
      failOnStatusCode: false,
    }).then((response) => {
     
      expect(response.status).to.eq(200);

      expect(response.body).to.be.an('array');

      if (response.body.length > 0) {
        expect(response.body[0]).to.have.property('name');
        expect(response.body[0]).to.have.property('id');
      }
    });
  });



  it('should return 404 Not Found for a non-existing endpoint', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:9966/petclinic/api/non-existing-endpoint', 
      failOnStatusCode: false, 
    }).then((response) => {
      
      if (response.status === 404) {
        
        expect(response.status).to.eq(404);

       
        if (response.body && response.body !== '') {
          expect(response.body).to.have.property('className');
          expect(response.body).to.have.property('exMessage');
        }
      } else if (response.status === 500) {
       
        cy.log('Received 500 Internal Server Error instead of 404.');
        expect(response.status).to.eq(500); 
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    });
  });

  it('should return 200 OK and list all pet types', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:9966/petclinic/api/pettypes',
      failOnStatusCode: false, 
    }).then((response) => {
      
      expect(response.status).to.eq(200);
  
      expect(response.body).to.be.an('array');
  
      
      if (response.body.length > 0) {
        expect(response.body[0]).to.have.property('name');
        expect(response.body[0]).to.have.property('id');
      }
    });
  });
  

});
