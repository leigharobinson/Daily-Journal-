// entriesDOM.js - Move the code that is 
// responsible for modifying the DOM into this file.



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

export default makeJournalEntryComponent