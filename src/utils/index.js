const { Movie } = require('../movie/movie.model');

exports.add = async (entryObj) => {
    try {
        const movie = new Movie(entryObj);
        const savedMovie = await movie.save();
        console.log(savedMovie);
    } catch (error) {
        console.log(error);
    }
};

exports.read = () => {
    Movie.find(function (error, movies){ 
         if (error) {
        return console.log(error)
    } else console.log(movies);
    })
};      


