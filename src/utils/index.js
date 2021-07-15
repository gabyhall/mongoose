const { Movie } = require('../movie/movie.model');
const { closeConnection } = require('../db/connection')

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

exports.read = () => {
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
        console.log("Movie status updated:");
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
        console.log("Movie status reset:");
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
