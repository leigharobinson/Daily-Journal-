/*
    Purpose:
    This file contains all code related to manipulating,
    or accessing the main flower database. Code not serving
    this purpose should not be added to this file.
*/
//  Move the code that deals with getting the data into this file.

// fetch("http://localhost:3000/entries")         // Fetch from the API
//     .then(entries => entries.json())  // Parse as JSON
//     .then(parsedEntries => {
//         console.table(parsedEntries);
//         // What should happen when we finally have the array?
//         renderJournalEntries(parsedEntries)
//     })

    const API = {
        getJournalEntries () {
            return fetch("http://localhost:8088/entries")
                .then(response => response.json())
                console.log(API)
        }
    }

