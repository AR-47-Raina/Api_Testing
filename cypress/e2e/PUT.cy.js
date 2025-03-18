describe('HTTP - PUT ', () => {
    it('Put', () => {
      cy.request({
        method: 'PUT',
        url: 'http://18.220.103.232:8000/api/v1/auth/profile/', 
        body: 
            {
                email: "AASSHH@gmail.com",
                phone_no: "234567834567",
                fullname: "ASH PASH",
                username: "ASH1"
            },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQyMzExNjU1LCJpYXQiOjE3NDIzMDQ0NTUsImp0aSI6IjZiOWFlMjdkNDZhMTRlYjA4NGQ5MjRjNWU0NTc5NGQxIiwidXNlcl9pZCI6IjU2ODcwNTUzLTIxMmEtNDgyYy1iYTcyLTc0MzcyZjA2ZWE1ZSJ9.erVrvHJZOp0QA9x7zgG59w23M9LRRhth8EJVWhJvxR0', 
          'apikey':'kjghfhdfsshgndcljdjsflsdfljuy575itjkshkjoujoiuhjdjkjkjshskkjkjhsjkhjk'
        },
      }).then((response) => {
        expect(response.status).to.eq(200)
        
      })
    })
  })
  