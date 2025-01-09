class Playlist {
    constructor(name) {
        this.name = name;
        this.songs = [];
    }

    addSong(song, user) {
        if (!song.isValid()) {
            throw new Error("Invalid song");
        }
        
        if (this.songs.length >= user.maxSongs) {
            throw new Error("Playlist limit reached. Upgrade to Premium for more songs!");
        }

        this.songs.push(song);
    }

    getSongList() {
        return this.songs.map(song => `${song.name} by ${song.artist}`);
    }
}

module.exports = Playlist;