// test.js
const User = require('./User');
const PremiumUser = require('./premium-user');
const Playlist = require('./playlist');
const Song = require('./Song');

// Create users
const basicUser = new User("Bob");
const premiumUser = new PremiumUser("Alice");

// Create playlist
const bobsPlaylist = new Playlist("Bob's Favorites");
const alicesPlaylist = new Playlist("Alice's Mix");

// Add songs
try {
    bobsPlaylist.addSong(new Song("Tuscan Leather", "Drake"), basicUser);
    bobsPlaylist.addSong(new Song("Chapter Six", "Kendrick Lamar"), basicUser);
    bobsPlaylist.addSong(new Song("The Box", "Roddy Rich"), basicUser);

    
    alicesPlaylist.addSong(new Song("All I Do", "Stevie Wonder"), premiumUser);
    alicesPlaylist.addSong(new Song("Butterflies", "Michael Jackson"), premiumUser);

    console.log("Bob's playlist:", bobsPlaylist.getSongList());
    console.log("Alice's playlist:", alicesPlaylist.getSongList());
} catch (error) {
    console.error("Error:", error.message);
}