describe("api chaining",()=>{
    it("g",()=>{
cy.request({
    method: "POST",
    url: "https://gorest.co.in/public/v2/users",
    headers: {
        Authorization: "Bearer 3f25f2715181c3abea38e9ea753d1e47783c1534978ab530a88c7b6de1857046",
        "Content-Type": "application/json"
    },
    body: {
        name: "John Doe",
        gender: "male",
        email: `johndoe${Date.now()}@example.com`, // Unique email to avoid duplication
        status: "active"
    }
})
.then((postRes) => {
    expect(postRes.status).to.eq(201);
    cy.log(JSON.stringify(postRes))
    
    let userID = postRes.body.id; // Store user ID
    cy.log("User Created - ID: " + userID);

    // 1st GET request to fetch the created user
     cy.request({
        method: "GET",
        url: `https://gorest.co.in/public/v2/users/${userID}`,
        headers: {
            Authorization: "Bearer 3f25f2715181c3abea38e9ea753d1e47783c1534978ab530a88c7b6de1857046"
        }
    });
})
.then((getRes1) => {
    expect(getRes1.status).to.eq(200);
    cy.log(JSON.stringify(getRes1))
    expect(getRes1.body).to.include.keys("id", "name", "email", "gender", "status")
    cy.log("User Verified - First GET: " + getRes1.body.name);

    let userID = getRes1.body.id; // Ensure ID is still valid

    // 2nd GET request (optional, for further verification)
    return cy.request({
        method: "GET",
        url: `https://gorest.co.in/public/v2/users/${userID}`,
        headers: {
            Authorization: "Bearer 3f25f2715181c3abea38e9ea753d1e47783c1534978ab530a88c7b6de1857046"
        }
    });
})
.then((getRes2) => {
    expect(getRes2.status).to.eq(200)
    cy.log(JSON.stringify(getRes2))
    expect(getRes2.body.id).to.exist
    cy.log("User Verified - Second GET: " + getRes2.body.name)
})
    })
})
