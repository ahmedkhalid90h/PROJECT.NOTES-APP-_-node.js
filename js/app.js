const fs = require('fs')


const yargs = require('yargs')

const notes = require('./notes')

yargs.command({
    command:'add',
    describe:'add node',
    builder:{
        title:{
            describe:' this is title describe in add ccommand',
            type:'string',
            demandOption:true
        },
        body:{
            describe:' this is title describe in add ccommand',
            type:'string',
            demandOption:true
        }
    },
    handler:()=>{
        notes.addNote(yargs.argv.title,yargs.argv.body)
    }
})
yargs.command({
    command:'delet',
    describe:'delet node',
    builder:{
        title:{
            describe:' this is title describe in delet ccommand',
            type:'string',
            demandOption:true
        },
    },
    handler:()=>{
        // console.log('delet node ' + yargs.argv.title );
        notes.removeNotes(yargs.argv.title)
    }
})
yargs.command({
    command:'read',
    describe:'read node',
    builder:{
        title:{
            describe:' this is title describe in read ccommand',
            type:'string',
            demandOption:true
        },
    },
    handler:()=>{
        // console.log('read node ' + yargs.argv.title );
        notes.readNotes( yargs.argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list node',
    handler:()=>{
    //    console.log('list node ' + yargs.argv.title + ' ' + yargs.argv.body);
    notes.listNotes(yargs.argv.title)
}
})



yargs.parse()


/* 
    git init 
    root of your project --> .gitignore
    open github desktop  --> add existing repo
*/