//STORING ARRAYS IN LOCAL STORAGE
//everything in local storage has to be a string, use JSON.stringify() and JSON.prase()
//JSON.stringify() - turns array and turns it into string / JSON.parse - fetch array and turn into string


// let myLeads = ["www.awesomelead.com"]
// myLeads = JSON.stringify(myLeads)
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epiclead.com")
// console.log(myLeads)


//let myLeads = `["www.awesomelead.com"]`
// 1. Turn the myLeads string into an array:                            myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array:                                    myLeads.push("www.epiclead.com")
// 3. Turn the array into a string again:                               myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string: console.log(typeof myLeads)




let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
// Get the leads from the localStorage - Store it in a variable, leadsFromLocalStorage
// Log out the variable
// ["lead1", "lead2"] or null

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) //check if we have any leads in local storage, and prase to get them as JS array

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage   PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()
    // To verify that it works:
    console.log(localStorage.getItem("myLeads"))
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems +=
            `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
