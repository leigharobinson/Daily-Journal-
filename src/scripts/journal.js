console.log("keep the faith Leigha")
// // In your JavaScript file, define an object that will represent a journal entry in your code.

// const journalEntryDay14 = {
// dateOfEntry: "Friday, April 17th, 2020",
// conceptsCovered: "Arrays, Objects, how to access properties with dot notation or brackett notation",
// longForm: "I learned a lot of stuff it was cool and a lot.",
// myMood: "fine"
// }


// // Eventually, you will have multiple journal entries,
// // so you need to define an appropriately named variable
// // that will have the value of an array.
// // Once you define that variable and give it a default
// // value of a blank array, use the push() method to
// // add the journalEntry object you defined above to the array.
// let allMyJournalEntries = []
// allMyJournalEntries.push(journalEntryDay14);

// console.log(allMyJournalEntries[0]);

// // Take a few minutes and define two or three more
// // JavaScript objects to represent journal entries f
// // or some other things that you have learned about
// // so far at NSS.

// // Add those new objects to your journal entries array.

// const journalEntryDay1 = {
// dateOfEntry: "Moday, April 6th, 2020",
// conceptsCovered: "John Wark, Instructors, classmates, getting our computers set up, .zshrc, how to make directory, how to navigate the terminal",
// longForm: "I learned a lot of stuff it was cool, love that my compter is all set up and I'm learning how to navigate it like a programmer",
// myMood: "happy"
// }
// const journalEntryDay2 = {
// dateOfEntry: "Tuesday, April 7th, 2020",
// conceptsCovered: "Pluggins, Aliases, watched Cohort 38's frontend Demo Day, CRUD, Keyboard Shortcuts",
// longForm: "I learned a lot of stuff it was cool.",
// myMood: "happy"
// }
// const journalEntryDay3 = {
// dateOfEntry: "Wednesday, April 8th, 2020",
// conceptsCovered: "Serving up Data, BEM (block, element, modifier), Developer tools ('dev tools')",
// longForm: "I learned a lot of stuff it was cool and a lot.",
// myMood: "happy"
// }
// allMyJournalEntries.push(journalEntryDay1, journalEntryDay2, journalEntryDay3);

// console.log(allMyJournalEntries.length);

// for (i = 0; i < allMyJournalEntries.length; i++) {
//     console.log(allMyJournalEntries[i]);
// }


// DAILY JOURNAL PART 3
// const journalDate = document.querySelector("#journalDate");
// console.log(journalDate);
// const conceptsCovered = document.querySelector("#conceptsCovered");
// console.log(conceptsCovered);
// const journalEntry = document.querySelector("#journalEntry");
// console.log(journalEntry);
// const mood = document.querySelector("#mood");
// console.log(mood);

const JournalEntries = [
    {
        // classNumber: 1,
        dateOfEntry: "Moday, April 6th, 2020",
        conceptsCovered: "John Wark, Instructors, classmates, getting our computers set up, .zshrc, how to make directory, how to navigate the terminal",
        longForm: "I learned a lot of stuff it was cool, love that my compter is all set up and I'm learning how to navigate it like a programmer",
        myMood: "happy" 
    },
    {
        // classNumber: 2,
        dateOfEntry: "Tuesday, April 7th, 2020",
        conceptsCovered: "Pluggins, Aliases, watched Cohort 38's frontend Demo Day, CRUD, Keyboard Shortcuts",
        longForm: "I learned a lot of stuff it was cool.",
        myMood: "happy"
    },
    {
        // classNumber: 3,
        dateOfEntry: "Wednesday, April 8th, 2020",
        conceptsCovered: "Serving up Data, BEM (block, element, modifier), Developer tools ('dev tools')",
        longForm: "I learned a lot of stuff it was cool and a lot.",
        myMood: "happy" 
    },
    {
        // classNumber: 14,
        dateOfEntry: "Friday, April 17th, 2020",
        conceptsCovered: "Arrays, Objects, how to access properties with dot notation or brackett notation",
        longForm: "I learned a lot of stuff it was cool and a lot.",
        myMood: "fine"
    }
]

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

renderJournalEntries(JournalEntries);