require('./db/connection');
const { add, read, update, remove, search, reset } = require('./utils');
const yargs = require('yargs');
const command = process.argv[2];
const titleInput = yargs.argv.title;
const actorInput = yargs.argv.actor;


const app = () => {
    if (command === "add") {
        if (actorInput) {
            add({title: titleInput, actor: actorInput });
        } else {
            add({title: titleInput});
        }
    } else if (command === "read") {
        read();
    } else if (command === "update") {
        update({title: titleInput}); 
    } else if (command === "reset") {
       reset({title: titleInput}); 
    } else if (command === "remove") {
        remove({title: titleInput});
    } else if (command === "search") {
        search({title: titleInput});
    }    
};

app();