

function submitList(){
    let listName = document.querySelector('.listName').value;
    let listItemsContainer = document.querySelector('.listItemsContainer');
    console.log(listName);
    listItemsContainer.innerHTML += '<div class="listItem">' + listName + '</div>';
}