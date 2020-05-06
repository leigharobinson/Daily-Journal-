console.log("keep the faith Leigha")

fetch("http://localhost:3000/entries")         // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        console.table(parsedEntries);
        // What should happen when we finally have the array?
        renderJournalEntries(parsedEntries)
    })

const makeJournalEntryComponent = (journalEntry) => {
    return `
    <div class="dailyEntry">
        <h1>${journalEntry.dateOfEntry}</h1>
        <section>${journalEntry.conceptsCovered}</section>
        <p>${journalEntry.longForm}</p>
        <aside>${journalEntry.myMood}</aside>
    </div> 
    `
}



const dailyEntryLog = document.querySelector(".entryLog");

const renderJournalEntries = (entry) => {
    for (let i = 0; i < entry.length; i++) {
    // console.log(entry[i]);
    dailyEntryLog.innerHTML += makeJournalEntryComponent(entry[i]);
    }
}

