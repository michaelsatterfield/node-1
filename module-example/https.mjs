

//imported functions from other files
import { send } from './request.mjs';
import { read } from './response.mjs';

function makeRequest(url, data) {
    send(url,data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hi')
console.log(responseData)
