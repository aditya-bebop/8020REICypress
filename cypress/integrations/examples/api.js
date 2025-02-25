describe('8020REI API Tests', () => {
    it('should retrieve a list of posts', () => {
      // Send GET request to /posts
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          // Validate response code is 200
          expect(response.status).to.eq(200)
          
          // Validate that the response body contains at least one post
          expect(response.body.length).to.be.greaterThan(0)
          
          // Validate each post contains userId, id, title, and body
          response.body.forEach((post) => {
            expect(post).to.have.all.keys('userId', 'id', 'title', 'body')
          })
        })
    });
  
    it('should create a new post', () => {
      // Send POST request with payload
      cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
      })
      .then((response) => {
        // Verify that the response code is 201
        expect(response.status).to.eq(201)
  
        // Validate that the response body contains the same title, body, and userId
        expect(response.body).to.include({
          title: 'foo',
          body: 'bar',
          userId: 1
        });
      });
    });

    it('should update the post with id 1', () => {
      // Send PUT request with payload
      cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1
      })
      .then((response) => {
        // Verify the response code is 200
        expect(response.status).to.eq(200)
  
        // Validate that the response body reflects the updated data
        expect(response.body).to.deep.include({
          id: 1,
          title: 'updated title',
          body: 'updated body',
          userId: 1
        });
      });
    });

    it('should delete the post with id 1', () => {
      // Send DELETE request to /posts/1
      cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
          // Verify the response code is 200
          expect(response.status).to.eq(200)
        });
  
      // Verify the post with id 1 does not exist anymore
      cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        failOnStatusCode: false  // We want to verify that the status code is 404, not fail the test
      }).then((response) => {
        // Verify that the response is a 404 error
        expect(response.status).to.eq(404)
      });
    });
  });
  