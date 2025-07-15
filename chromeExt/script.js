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

//SAVE LEADS TO LOCAL STORAGE
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

//GET LEADS FROM LOCAL STORAGE :  JSON.parse()
// Store it in a variable, leadsFromLocalStorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) //use const, it doesn't get changed
//Check if leadsFromLocalStorage is truthy  If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads) //pass in argument
}

//change to leads so it is not related to the myLeads global variable to make it more dynamic and reusable
function render(leads) { //shows user what was found in local storagechange to leads so it is not related to the myLeads global variable
    let listItems = ""   //
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener('dblclick', function ()){
    localStorage.clear() //clear local storage
    myLeads = [] // set to empty array
    render(myLeads) //clears DOM bc it renders out the newly empty array

}
// Log out the variable
console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage   PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
