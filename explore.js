// We're geetting a hold of the client, Twilio
const Twilio = require("twilio");

// Setting a new client so all requets are authenticated, hence the token
const client = new Twilio("ACCOUNT SID", "ACCOUNT TOKEN");


// We're gonna do a message that is a list that is in asynch method
client.messages
    .list()
    .then(messages => console.log(`The most recent message is ${message[0].body}`)).catch(err => console.error(err));

    console.log('Gathering your message log');