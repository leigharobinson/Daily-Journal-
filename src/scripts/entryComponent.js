// Move the code that is responsible for creating the j
// ournal entry HTML component into this file.


const dailyEntryLog = document.querySelector(".entryLog");

const renderJournalEntries = (entry) => {
    for (let i = 0; i < entry.length; i++) {
    // console.log(entry[i]);
    dailyEntryLog.innerHTML += makeJournalEntryComponent(entry[i]);
    }
}
