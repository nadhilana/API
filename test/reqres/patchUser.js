const assert = require("assert");

describe('API Patch User', function () {


    it('Patch user should be success', async function () {
        this.timeout(10000)
        const url = 'https://reqres.in/api/users/2'
        const requestData = {
            "data": {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet update",
                "last_name": "Weaver",
                "avatar": "https://reqres.in/img/faces/2-image.jpg"
            },
            "support": {
                "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
                "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
            }
        }

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        const Responsedata = await response.json();

        // Untuk mencetak response API
        console.log("Response : " + JSON.stringify(Responsedata, null, 1));

        // Untuk assert status code harus sama dengan 200
        assert.strictEqual(response.status, 200, "Status harus 200");

        // Untuk assert firstname sama dengan 'Janet  update'
        assert.strictEqual(Responsedata.data.first_name, "Janet update");
    })
})