// entriesDOM.js - Move the code that is 
// responsible for modifying the DOM into this file.




import makeJournalEntryComponent from  "./entryComponent.js"

const dailyEntryLog = document.querySelector(".entryLog");

const renderJournalEntries = (entry) => {
    for (let i = 0; i < entry.length; i++) {
    // console.log(entry[i]);
    dailyEntryLog.innerHTML += makeJournalEntryComponent(entry[i]);
    }
}

export default renderJournalEntries