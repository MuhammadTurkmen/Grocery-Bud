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
// clear items
clearBtn.addEventListener('click', clearItems)

// ****** FUNCTIONS ********** 
function addItem(e) {
    e.preventDefault()
    const value = grocery.value 
    const id = new Date().getTime.toString() 
    if(value  && !editFlag) {
        const element = document.createElement('article')
        // add class
        element.classList.add('grocery-item')
        // add id
        const atrr = document.createAttribute('data-id')
        atrr.value = id
        element.setAttributeNode(atrr)
        element.innerHTML = `<p class="title">${value}</p>
                            <div class="btn-container">
                            <button type="button" class="edit-btn"> 
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                            </div>`

        const deleteBtn = element.querySelector('.delete-btn')
        const editBtn = element.querySelector('.edit-btn')
        deleteBtn.addEventListener('click', deleteItem)
        editBtn.addEventListener('click', editItem)
        // append child
        list.appendChild(element)
        displayAlert("item added to the list", 'success')
        // show container
        container.classList.add('show-container')
        // add to local storage
        addToLocalStorage(id, value)
        // set back to defualt
        setBackToDefault()
    } else if(value  && editFlag) {
        editElement.innerHTML = value
        displayAlert('value changed ', 'success')
        // edit local Storege 
        editLocalStorage()
        setBackToDefault()
        
    } 
    else { 
        displayAlert('please enter value', 'danger')
    }
}

// display alert
function displayAlert(text, action) {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    // remove alert
    setTimeout(function(){
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}

// clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item')
    if(items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item)
        })
    }
    container.classList.remove('show-container')
    displayAlert('empty list', 'danger')
    setBackToDefault()
    // localStorage.removeItem('list')
}

// delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    list.removeChild(element)
    if(list.children.length === 0) {
        container.classList.remove('show-container')
    }
    displayAlert('item removed', 'danger')
    setBackToDefault()
    // remove from local storege
    // removeFromLocalStorege(id)
}
// edit function
function editItem() {
    const element = e.currentTarget.parentElement.parentElement
//   set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling
// set form value
    grocery.value = editElement.innerHTML
    editFlag = true
    editID = element.dataset.id
    submitBtn.textContent = 'edit'
}

// set backto default
function setBackToDefault() {
    grocery.value = ''
    editFlag = false
    editID = ''
    submitBtn.textContent = 'submit'
} 
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {

}

function removeFromLocalStorege(id) {

}
// ****** SETUP ITEMS **********
