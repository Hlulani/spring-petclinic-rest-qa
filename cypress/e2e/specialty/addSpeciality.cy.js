describe('Create Specialty - POST Request', () => {
    it('should create a new specialty and return 201 Created', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:9966/petclinic/api/specialties', 
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            "name": "radiology" 
          }
        }).then((response) => {
         
          expect(response.status).to.eq(201);
    
          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('name', 'radiology');
        });
      });

    
  
  });
  