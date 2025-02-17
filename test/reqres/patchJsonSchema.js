const assert = require("assert");
const Ajv = require("ajv");
const ajv = new Ajv()

const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "email": {
            "type": "string"
          },
          "first_name": {
            "type": "string"
          },
          "last_name": {
            "type": "string"
          },
          "avatar": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "email",
          "first_name",
          "last_name",
          "avatar"
        ]
      },
      "support": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "text": {
            "type": "string"
          }
        },
        "required": [
          "url",
          "text"
        ]
      },
      "updatedAt": {
        "type": "string"
      }
    },
    "required": [
      "data",
      "support",
      "updatedAt"
    ]
  };

describe('Validation JSON Schema', function () {


    it('JSON Schema', async function () {
        this.timeout(5000)
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

        const data = await response.json()
        const validate = ajv.compile(schema);

        const valid = validate(data);
        if (!valid) {
            console.log(validate.errors);
        }

        console.log("test: " + JSON.stringify(data, null, 1))
        assert.ok(valid, "Response JSON harus sesuai dengan schema");
    });


})


