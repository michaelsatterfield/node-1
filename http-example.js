
// use es6 to destructure the obejct returned from the 'require' call
// const http = require('http');
const { get  } = require('http');

get("http://www.google.com", (res) =>{
    res.on('data', (chunk) =>{
        console.log(`Data chunk ${chunk}`);
    })
    res.on('end', () => {
        console.log("No mas data")
    })
});

// req.end();
