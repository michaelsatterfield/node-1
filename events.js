const EventEmitter = require('events');
const celebrity = new EventEmitter();


//call back functions
celebrity.on('race', (result => {
        if (result === 'win') {
            console.log("you win");
        }
    })
);

celebrity.on('race', (result) => {
    if (result === "loss") {
        console.log("awww");
    }
});


process.on('exit', (code) =>{
    console.log('Process exit event with code: ', code)
});
//event emitter
celebrity.emit('race', 'win');
celebrity.emit('race', 'loss');

