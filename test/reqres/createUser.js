const assert = require("assert");

describe('API Create User', function () {


    it('Create user should be success', async function () {
        this.timeout(10000)
        const url = 'https://reqres.in/api/users'
        const requestData = {
            "data": {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
            },
            "support": {
                "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
                "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
            }
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

        // Untuk mencetak response API
        console.log("Response : " + JSON.stringify(Responsedata, null, 1));

        // Untuk assert status code harus sama dengan 201
        assert.strictEqual(response.status, 201, "Status harus 201");

        // Untuk assert firstname sama dengan 'Janet'
        assert.strictEqual(Responsedata.data.first_name, "Janet");
    })
})