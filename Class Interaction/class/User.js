class User {
    constructor(name) {
        this.name = name;
        this.playlists = [];
        this.maxSongs = 2; // Basic users get 2 songs per playlist
    }
}

module.exports = User;