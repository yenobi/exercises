class Chat {
    constructor() {
        this.clients = [];
    }

    subscribe(req, res) {
        console.log('subscr');
        this.clients.push(res);

        res.on('close', () => {
            this.clients.splice(this.clients.indexOf(res), 1);
        });
    }

    // why always undefined instead of message?!
    publish(message) {
        console.log(`message is ${message}`);
        this.clients.forEach((res) => {
            res.end(message);
        });

        this.clients = [];
    }

}

module.exports = Chat;