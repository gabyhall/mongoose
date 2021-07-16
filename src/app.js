require('./db/connection');
const { add, list, update, remove, search, reset, sorry, rate } = require('./utils');
const yargs = require('yargs');
const command = process.argv[2];
const titleInput = yargs.argv.title;
const actorInput = yargs.argv.actor;
const ratingInput = yargs.argv.rating;


const app = () => {
    if (command === "add") {
        if (actorInput && ratingInput) {
            add({title: titleInput, actor: actorInput, rating: ratingInput });
        } else if (actorInput) {
            add({title: titleInput, actor: actorInput });
        } else if (ratingInput) {
            add({title: titleInput, rating: ratingInput });
        } else {
            add({title: titleInput});
        }
    } else if (command === "list") {
        list();
    } else if (command === "update") {
        update({title: titleInput}); 
    } else if (command === "reset") {
       reset({title: titleInput}); 
    } else if (command === "remove") {
        remove({title: titleInput});
    } else if (command === "search") {
        search({title: titleInput});
    } else if (command === "rate") {
        rate({title: titleInput});
    } else {
        sorry();
    }   
};

app();