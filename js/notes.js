const fs = require('fs')
const { title } = require('process')
// const { title } = require('process')


////////////---- load Notes ----///////////////

const loadNotes = () =>{
    try {
        const data = fs.readFileSync('notes.json').toString()
        // toString()  json to string
        return JSON.parse(data)
        // parse() string to json
    } catch (error) {
        return []
    }
}

////////////---- load Notes ----///////////////

////////////---- save Notes ----///////////////

const saveNotes = (data)=>{
    // console.log(data);
    const saveData = JSON.stringify(data)
    fs.writeFileSync('notes.json',saveData)
}

////////////---- save Notes ----///////////////






////////// V1 addNotes ////////////////
// title -->  yargs.argv.title
// body -->  yargs.argv.body
// const addNote = (title,body) =>{
//     const notes = loadNotes()  
//     console.log(notes);
// /// [{title:'yargs.argv.body --> Note',body:'yargs.argv.body--> Note'}]
//     notes.push({
//         title,
//         body
//     })
//     saveNotes(notes)
// }

////////// V1 ////////////////

//////////////////---- Add Notes filter ----/////////////////////////////

const addNote = (title,body)=>{
    const notes = loadNotes()
    console.log(notes);
    // filter return emty Arry []
    const duplicateTitle = notes.filter((obj)=>{
        // notes.find() loop to take frist title true
        return obj.title === title
    })
    console.log(duplicateTitle)
    if (duplicateTitle.length == 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(' your notes in successfully ')
    } else {
        console.log(' Error Duplicate Your Title ')
    }
}

//////////////////---- Add Notes filter ----/////////////////////////////

//////////////////---- Add Notes find ----/////////////////////////////

// const addNoteFind = (title,body)=>{
//     const notes = loadNotes()
//     const duplicateTitle = notes.find((el)=>{
//         return el.title === title
//     })
//     if (!duplicateTitle) {
//         notes.push({
//             title,
//             body
//         })
//         saveNotes(notes)
//     } else {
//         console.log(' Error Duplicate Your Title ')
//     }
// }

//////////////////---- Add Notes find ----/////////////////////////////


//////////////////////--- remove filter ----///////////////


const removeNotes = (title) =>{
    const notes = loadNotes() 
    const notesToKeep = notes.filter((obj)=>{
        return obj.title !== title
    })
    if (notesToKeep.length !== notes.length) {
        saveNotes(notesToKeep)
        console.log('notes is deleted');
    } else {
        return console.log('sorry no note is found');
    }
}

//////////////////////--- remove filter ----///////////////

//////////////////////--- remove find ----///////////////

// const removeNotesFind  = (title)=>{
//     const notes = loadNotes()
//     const notesToKeep = notes.find((el)=>{
//         return el.title == title
//     })
//     if (notesToKeep) {
//         const index = notes.indexOf(notesToKeep)
//         notes.splice(index,1)
//         saveNotes(notes)
//         console.log('notes is deleted')
//     } else {
//         console.log('sorry no note is found')
//     }
// }

//////////////////////--- remove find ----///////////////

////////////////---- read notes ----//////////////

const readNotes = (title)=>{
    const notes = loadNotes()
    const findNote = notes.find((el)=>{
        return el.title === title
    })
    if (findNote) {
        console.log(findNote.body)
    } else {
        console.log('no found this title');
    }
}

////////////////---- read notes ----//////////////


////////////////---- list notes ----//////////////

const listNotes = (title)=>{
    const notes = loadNotes()
    notes.forEach(el => {
        console.log(el.body);
    })
}

////////////////---- list notes ----//////////////




module.exports = {
    addNote,
    removeNotes,
    readNotes,
    listNotes
}




