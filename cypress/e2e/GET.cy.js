describe("HTTP-GET",()=>{
    it('GET-MULTIPLE USER',()=>{
        
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
             headers:{
                "authorization":"Bearer 3f25f2715181c3abea38e9ea753d1e47783c1534978ab530a88c7b6de1857046"
            } 

        })
        .then((res)=>{
            expect(res.status).to.eq(200)
            cy.log(JSON.stringify(res))
        })
    })
    it('GET-SINGLE USER',()=>{
        
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users/7779864",
             headers:{
                "authorization":"Bearer 3f25f2715181c3abea38e9ea753d1e47783c1534978ab530a88c7b6de1857046"
            } 

        })
        .then((res)=>{
            expect(res.status).to.eq(200)
            cy.log(JSON.stringify(res))
        })
    })
})