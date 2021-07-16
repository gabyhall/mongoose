const { Movie } = require('../movie/movie.model');
const { closeConnection } = require('../db/connection')

const yargs = require('yargs');

exports.add = async (entryObj) => {
    try {
        const movie = new Movie(entryObj);
        const savedMovie = await movie.save();
        console.log("Movie added to your list:");
        console.log(savedMovie);
        closeConnection();
    } catch (error) {
        console.log(error);
    }
};

exports.list = () => {
    Movie.find(function (error, movies){ 
         if (error) {
        return console.log(error)
    } else {
        console.log("Here is your movie list:");
        console.log(movies);
        closeConnection();
        }
    })
};      

exports.update = async (entryObj) => {
    try {
        const movie = await Movie.findOne(entryObj);
        movie.watched = true;
        const savedMovie = await movie.save();
        console.log("Movie status updated to watched:");
        console.log(savedMovie);
        closeConnection();
    } catch (error) {
        console.log(error);
    }
};

exports.reset = async (entryObj) => {               // to reset status to unwatched //
    try {
        const movie = await Movie.findOne(entryObj);
        movie.watched = false;
        const savedMovie = await movie.save();
        console.log("Movie status reset to unwatched:");
        console.log(savedMovie);
        closeConnection();
    } catch (error) {
        console.log(error);
    }
};

exports.remove = async (entryObj) => { 
    try {
        await Movie.deleteOne(entryObj);
        console.log("Movie deleted from your list");
        closeConnection();
    } catch (error) {
        console.log(error);
    }
};

exports.search = async (entryObj) => {              // search through the movie list to check if something is on there //
    try {
        const movie = await Movie.findOne(entryObj);
        console.log(movie);
        closeConnection();
    } catch (error) {
        console.log(error);
    }
};

exports.rate = async (entryObj) => {                // changes rating of movie or adds a rating if not initially added with one //
    try {
        const movie = await Movie.findOne(entryObj);
        movie.rating = yargs.argv.rating;        
        const savedMovie = await movie.save();
        console.log("Movie rating updated:");
        console.log(savedMovie);
        closeConnection();
    } catch (error) {
        console.log(error)
    }
}

exports.sorry = () => {
    console.log("I'm sorry, this isn't a command your movie list recognises.");
    closeConnection();
};