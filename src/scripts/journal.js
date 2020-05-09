import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"




console.log("keep the faith Leigha")


/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)

// API.getJournalEntries().then(renderJournalEntries)

const container = document.querySelector("#newContainer")

document.querySelector("#recordJournalEntry").addEventListener("click", event => {
    const journalDate = document.querySelector("#journalDate").value; 
    const conceptsCovered = document.querySelector("#conceptsCovered").value;
    const journalEntry = document.querySelector("#journalEntry").value;
    const mood = document.querySelector("#mood").value;

     container.innerHTML += `
    <div>
        <h1>${journalDate}</h1>
        <section>${conceptsCovered}</section>
        <p>${journalEntry}</p>
        <aside>${mood}</aside>
    </div> 
    `

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
    };
})

API.getJournalEntries().then(renderJournalEntries)


