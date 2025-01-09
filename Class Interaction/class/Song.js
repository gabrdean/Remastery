class Song {
    constructor(name, artist) {
        this.name = name;
        this.artist = artist;
    }

    isValid() {
        return this.name !== undefined && 
               this.name !== '' && 
               this.artist !== undefined && 
               this.artist !== '';
    }
}

module.exports = Song;