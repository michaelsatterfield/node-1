

//imported functions from other files
const request = require('./request');
const respone = require('./response')

function request(url, data) {
    send(url,data);
    return read();
}
