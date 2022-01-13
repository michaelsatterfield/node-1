

//imported functions from other files
const request = require('./request');
const respone = require('./response')

function makeRequest(url, data) {
    return request.send(url,data);
    return respone.read();
}

const responseData = makeRequest('https://google.com', 'hello')
console.log(responseData)
