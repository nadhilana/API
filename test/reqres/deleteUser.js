const assert = require("assert");

describe('API Delete User', function () {


    it('Delete user should be success', async function () {
        this.timeout(10000)
        const url = 'https://reqres.in/api/users/2'
        const requestData = {}

        const response = await fetch(url, {
            method: "DELETE",
            redirect: "follow"
        });

        const Responsedata = await response;
        console.log(response)

        // Untuk mencetak response API
        console.log("Response : " + Responsedata);

        // Untuk assert status code harus sama dengan 204
        assert.strictEqual(Responsedata.status, 204, "Status harus 204");
    })
})