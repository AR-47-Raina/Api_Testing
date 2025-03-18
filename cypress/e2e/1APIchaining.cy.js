//REGISTER
//LOGIN
//DELETE

describe('API Testing ', () => {
    let Url = 'http://18.220.103.232:8000/api/v1/';
    let userEmail
    let accessToken
    let userID
    let apikey='kjghfhdfsshgndcljdjsflsdfljuy575itjkshkjoujoiuhjdjkjkjshskkjkjhsjkhjk'

    it('User Register, Login, and Delete', () => {
        let randomEmail = Math.random().toString(36).substring(2) + "@gmail.com"
        let randomUsername = "Tom_" + Math.random().toString(36).substring(2)

        //  Register User
        cy.request({
            method: 'POST',
            url: `${Url}auth/register/`,
            body: {
                email: randomEmail,
                fullname: "Tom 123",
                password: "Test@12345",
                username: randomUsername,
                phone_no: "1234567890",
                profile_pic_url: "https://example.com/profile.jpg",
                is_private: false,
                role: "admin",
                country_code: "IN",
                device_token: "abcdgfh78782",
                device_id: "ABD12345678",
                device_type: "mobile",
                os: "android"
            },
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apikey 
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            cy.log(`Response: ${JSON.stringify(response.body)}`)

            //assertions
            expect(response.body.result.user_data).to.have.property('email', randomEmail)
            expect(response.body.result.user_data).to.have.property('fullname', "Tom 123")
            expect(response.body.result.user_data).to.have.property('username', randomUsername)
            expect(response.body.result.user_data).to.have.property('mobile_no', "1234567890")
            expect(response.body.result.user_data).to.have.property('profile_pic_url', "https://example.com/profile.jpg")
            expect(response.body.result.user_data).to.have.property('is_private', false)
            expect(response.body.result.user_data).to.have.property('user_type', "admin")
            expect(response.body.result.user_data).to.have.property('country_code', "IN")
           
            //Store registered user details
            userEmail = response.body.result.user_data.email;
            cy.log("User's Email: " + userEmail);
        }).then(() => {
            // Step 2: Login with registered user
            cy.request({
                method: 'POST',
                url: `${Url}auth/login/`,
                body: {
                    email: userEmail,  
                    password: "Test@12345",
                    device_token: "abcd1234efgh5678782",
                    device_id: "ABC12345",
                    device_type: "mobile",
                    os: "android"
                },
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apikey                }
            }).then((Res) => {
                expect(Res.status).to.eq(200);
                cy.log(`Login Response: ${JSON.stringify(Res.body)}`)

                //Store access token & user ID
                accessToken = Res.body.result.token.access_token;
                userID = Res.body.result.user_data.id;

                cy.log("User ID: " + userID);
                cy.log("Access Token: " + accessToken);
            });
        }).then(() => {
            // Step 3: Fetch User Profile using Token
            cy.request({
                method: "DELETE",
                url: `${Url}auth/profile/`, 
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'x-api-key': apikey 
                }
            }).then((deleteRes) => {
                expect(deleteRes.status).to.eq(200)
                cy.log("User Deleted Successfully")
        })
    })
})
})
