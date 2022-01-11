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
celebrity.emit('race', 'win');
celebrity.emit('race', 'loss');

