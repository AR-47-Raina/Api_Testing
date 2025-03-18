describe('DELETE Request Example', () => {
    
    it('Should delete a resource', () => {
      cy.request({
        method: 'DELETE',
        url: 'http://18.220.103.232:8000/api/v1/auth/profile/', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQyMzA4MDgyLCJpYXQiOjE3NDIzMDA4ODIsImp0aSI6ImE3M2FkMmJhZTBjNjQ2NzZiNzhmZjQzZDg2MmMzZGMzIiwidXNlcl9pZCI6IjAxMzk1ZjI2LTM4MTQtNDBjYy05ODk3LWQ2NzM2OGNkMDNiOCJ9.gst-UHsOGVPaLDy60St9hpo3mzIOW1Sk4S3KRJ_LeFQ',
          "x-api-key": "kjghfhdfsshgndcljdjsflsdfljuy575itjkshkjoujoiuhjdjkjkjshskkjkjhsjkhjk" 
        },
      }).then((response) => {
        expect(response.status).to.eq(200); 
      })
    })
  })