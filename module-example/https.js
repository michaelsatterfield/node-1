

//imported functions from other files
const { send } = require('./request');
const{ read } = require('./response')

function makeRequest(url, data) {
    return request.send(url,data);
    return respone.read();
}

const responseData = makeRequest('https://google.com', 'hello')
console.log(responseData)
