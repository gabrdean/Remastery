const User = require("./User");

class PremiumUser extends User {
    constructor(name) {
        super(name);
        this.maxSongs = 3; // Premium users get 3 songs per playlist. LOL i know. What a subscription..
    }
}

module.exports = PremiumUser;