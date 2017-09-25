let LuisQuery = require("./../build/LuisQuery")
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('payload passed to the getQuery function', function () {
    let url = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/4c7b2108-85f7-4a47-b509-f7ef053de4d8?subscription-key=d73b4400d6d745c6b06758e474492522&verbose=true&timezoneOffset=0&spellCheck=true&q=";
    
    it('should throw an error when empty string is passed', function (done) {
        expect(
            LuisQuery.getQuery("")
        ).to.throw("Payload error: Either empty or undefined")
    });

    
    it('should throw an error when no argument is passed', function (done) {
        expect(
            new LuisQuery().getQuery()
        ).to.throw("Payload error: Either empty or undefined")
    });
    
});
