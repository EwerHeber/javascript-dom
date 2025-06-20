// add pageTitle
const pageTitle = "My Grocery List";
// add groceries
const groceries = [
    'Milk',
    'Eggs',
    'Bread',
    'Apples',
    'Cheese'
];
/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function displayListTitle() {
    const titleElement = document.getElementById('title');
    titleElement.textContent = pageTitle;
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
    const shoppingList = document.getElementById('shopping-list');

    
    groceries.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('list-item');

    const itemName = document.createElement('div');
    itemName.textContent = item;

    const quantityContainer = document.createElement('div');
    quantityContainer.classList.add('quantity-container');

    const quantityLabel = document.createElement('span');
    quantityLabel.classList.add('super');
    quantityLabel.textContent = 'quantity';

    const quantityValue = document.createElement('span');
    quantityValue.textContent = '1';

    quantityContainer.appendChild(quantityLabel);
    quantityContainer.appendChild(quantityValue);

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(quantityContainer);

    shoppingList.appendChild(itemDiv);
    });
}

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
    const items = document.querySelectorAll('.list-item');
    items.forEach(item => {
        item.classList.add('complete');
    });
}

function unmarkAll() {
    const items = document.querySelectorAll('.list-item');
    items.forEach(item => {
        item.classList.remove('complete');
    });
}


displayListTitle();
displayGroceries();

