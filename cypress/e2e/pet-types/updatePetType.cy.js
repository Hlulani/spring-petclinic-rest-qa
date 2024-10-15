describe('Pet Type API - Update and Verify Requests', () => {
    describe('Update Pet Type - PUT Request', () => {
      it('should update the pet type and return 204 No Content', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:9966/petclinic/api/pettypes/2',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: {
            "name": "hamster",
            "id": 1 
          }
        }).then((response) => {
          
          expect(response.status).to.eq(204);
  
          // Loosen the cache-control header checks
          expect(response.headers['cache-control']).to.include('no-cache');
          expect(response.headers['cache-control']).to.include('no-store');
          expect(response.headers['cache-control']).to.include('max-age=0');
          expect(response.headers['cache-control']).to.include('must-revalidate');
  
          expect(response.headers).to.have.property('x-content-type-options', 'nosniff');
          expect(response.headers).to.have.property('x-frame-options', 'DENY');
        });
      });
    });
  
    describe('Update and Verify Pet Type - PUT and GET Requests', () => {
        it('should update the pet type and verify the update', () => {
    
          cy.request({
            method: 'PUT',
            url: 'http://localhost:9966/petclinic/api/pettypes/2', 
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: {
              "name": "hamster",
              "id": 2 
            }
          }).then((response) => {
            
            expect(response.status).to.eq(204);
          });
      
          
          cy.request('GET', 'http://localhost:9966/petclinic/api/pettypes/2')
            .then((response) => {
              
              expect(response.status).to.eq(200);
      
             
              expect(response.body).to.have.property('name', 'hamster'); 
              expect(response.body).to.have.property('id', 2); 
            });
        });
      });
      
  });
  