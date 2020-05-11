import API from "./data.js"
import createJournalEntry from "./createEntry.js" 
import renderJournalEntries from "./entriesDOM.js"




console.log("keep the faith Leigha")


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)
// // 

API.getJournalEntries().then(renderJournalEntries)

document.querySelector("#recordJournalEntry").addEventListener("click", event => {
    event.preventDefault();
    let journalDate = document.querySelector("#journalDate").value; 
    let conceptsCovered = document.querySelector("#conceptsCovered").value;
    let journalEntry = document.querySelector("#journalEntry").value;
    let mood = document.querySelector("#mood").value;

    
    let newJournalEntry = createJournalEntry(journalDate, conceptsCovered, journalEntry, mood);

    if (journalDate == "") {
        alert("Please pick a date")
        } else if (conceptsCovered == "") {
            alert("Please fill in 'Concepts coverd'")
        } else if (journalEntry == "") {
            alert("Please fill in 'Journal entry'")
        } else if (mood == "") {
            alert("Please fill in 'Mood of the day'")
    } else {
        console.log("leigha") 
        API.saveJournalEntry(newJournalEntry)
        .then(API.getJournalEntries)
        .then(renderJournalEntries); 
    }
        

})




