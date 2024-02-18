// ****** SELECT ITEMS **********

const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement
let editFlag = false
let editID = ""

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem)
// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime.toString()
    if(value  && !editFlag) {}
    else if(value  && editFlag) {} 
    else {
        
    }
}

// display alert
function displayAlert(text, action) {
    alert.textContent = 'empty value'
    alert.classList.add('alert-danger')
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
