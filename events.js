

const EventEmitter = require('events');
const celebrity = new EventEmitter();



celebrity.on('race win', () => {
    console.log("you win");
})

celebrity.on('race win', () => {
    console.log("awww");
})
celebrity.emit('race win');

