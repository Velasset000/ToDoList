

const lists = JSON.parse(localStorage.getItem('lists')) || [];
localStorage.setItem('lists', JSON.stringify(lists));
let currentList;
let current;
let newDiv;
const completedTasks = []
let completionStatus = false
var doNotSwitch = false
render()
addList()
//changes the objects status to complete and will make that now ready to be cleared
function markComplete(){
  let checkbox = document.querySelector('.checkbox');
  let checkBoxArr = document.querySelectorAll('.checkbox')
  let toDoIndex = Array.from(document.querySelectorAll('.checkbox'));
  
  checkBoxArr.forEach(elm => {
    if (elm.checked) {
      current.todos[toDoIndex.indexOf(elm)].completed = true;
      elm.parentElement.parentElement.classList.remove('not-complete')
      elm.parentElement.parentElement.classList.add('complete')
      elm.nextSibling.classList.add('complete')
      localStorage.setItem('lists', JSON.stringify(lists));
    }
    else {
      console.log('not checked')
    }
  })
  
}

// Deletes all the complete tasks and their corresponding objects  
function clearMarkComplete(){
  let completedIndexes = [];

  current.todos.forEach((elm, index) => {
    if (elm.completed === true){
      completedIndexes.push(index);
    }
  });

  completedIndexes.reverse().forEach(index => {
    document.querySelectorAll('.toDoContainer')[index].remove();
    current.todos.splice(index, 1);
    doNotSwitch = false
    localStorage.setItem('lists', JSON.stringify(lists));
  });
}

//Pushs the text from the to do input into an object in the lists array

function addToDo(){
  if (document.querySelector('.toDoInput').value !== ""){
    let toDoInput = document.querySelector('.toDoInput').value;
    current.todos.push({'text': toDoInput, 'completed': false})
  }
    let toDoListDiv = "";
    let checkbox = '<input type="checkbox" class="checkbox">'
    // creates the elments divs and makes them into the html of the to do list
    current.todos.forEach((elm) => {toDoListDiv += '<div class="toDoContainer">' +
      '<div>' + checkbox + '<span class="toDo">' + elm.text + '</span>' + '</div>' + 
      '<span class="actionContainer"><i class="editButton fa-regular fa-pen-to-square"></i><i class="deleteButton fa-solid fa-delete-left"></i></div>' + 
      '</span>'})
    document.querySelector('.currentToDos').innerHTML = toDoListDiv
    document.querySelector('.toDoInput').value = ""
    localStorage.setItem('lists', JSON.stringify(lists));
    // checks if the task is comlpete and adds the corresponding class 
    current.todos.forEach(elm =>{
      let taskComplete = current.todos[current.todos.indexOf(elm)].completed
      if (taskComplete === false){
        test('no', current.todos.indexOf(elm))
      }
      else {
        test('yes', current.todos.indexOf(elm))
    }
    })
    function test(check, index){
      if(check === 'no'){
        document.querySelectorAll('.toDoContainer')[index].classList.add('not-complete')
        return 'not-complete'
      }
      else{
        document.querySelectorAll('.toDoContainer')[index].classList.add('complete')
        return 'complete'
      }
    }

    // This give the edit button functionality. When clicked it will make the corrisponding text content editable
    // then update the object to the new text content when hitting enter

    let editButtons = document.querySelectorAll('.editButton')
    editButtons.forEach(function(editButton){
      editButton.addEventListener('click', function (){
        let currentEdit = this
        let previousSib = this.parentElement.previousSibling.children[1]
        previousSib.contentEditable = true;
        previousSib.style.backgroundColor = 'red'
        previousSib.focus()
        previousSib.addEventListener('keypress', function(e){
          if(e.key === 'Enter'){
            let toDoIndex = Array.from(document.querySelectorAll('.toDo')).indexOf(previousSib);
            current.todos[toDoIndex].text = previousSib.textContent
            previousSib.contentEditable = false;
            previousSib.style.backgroundColor = 'white'
            localStorage.setItem('lists', JSON.stringify(lists));
          }
        })
      })
    })
    let deleteButtons = document.querySelectorAll('.deleteButton')
    deleteButtons.forEach(function(deleteButton){
      deleteButton.addEventListener('click', function deleteToDo(){
        let toDoIndex = Array.from(document.querySelectorAll('.deleteButton')).indexOf(deleteButton)
        this.parentElement.parentElement.remove()
        current.todos.splice(toDoIndex, 1);
        localStorage.setItem('lists', JSON.stringify(lists))
      })
    })
 }


// Adds the list and sets the html of the page to the correct object this function also includes an if / else 
// statment that will deselect the old list and select the new list when a new list is clicked
function addList(){
  for(i=0; i < lists.length; i++){
  if(document.querySelector('.listName').value === lists[i].name){
    alert ('List Name Already Taken')
    document.querySelector('.listName').value = ""
    return
  }
  }
  if (document.querySelector('.listName').value !== ""){
  let newList = {
    name: document.querySelector('.listName').value,
    todos: []
  }
  document.querySelector('.currentToDos').innerHTML = ""
  lists.push(newList);
  localStorage.setItem('lists', JSON.stringify(lists));
  }
  currentList = lists[0]
  render();
  
  document.querySelectorAll('.listNameDisplay').forEach((elm) => {
    elm.addEventListener('click',function(){
      if (document.getElementsByClassName('listItemClicked').length < 1) {
          this.classList.toggle('listItemClicked')
          current = lists.find(item => item.name === this.textContent);
          if (current === undefined){
            document.querySelector('.toDoListName').innerHTML = 'Select A List.'
          }
          else {
            document.querySelector('.toDoListName').innerHTML = current.name + 
            '<input class="toDoInput" type="text" placeholder="Enter To Do" name="toDo"></input>' + 
            '<input class="toDoSubmit" onclick="addToDo()" type="submit" name="listname">' + 
            '<button class="markImportant" onClick="markComplete()"> Mark As Complete </button>' +
            '<button class="submitComplete" onClick="clearMarkComplete()"> Clear Complete Tasks </button>';
            let toDoListDiv = "";
            let checkbox = '<input type="checkbox" class="checkbox">'
            current.todos.forEach((elm) => {toDoListDiv += '<div class="toDoContainer">' +
            '<div>' + checkbox + '<span class="toDo">' + elm.text + '</span>' + '</div>' + 
            '<span class="actionContainer"><i class="editButton fa-regular fa-pen-to-square"></i><i class="deleteButton fa-solid fa-delete-left"></i></div>' + '</span>'})
          document.querySelector('.currentToDos').innerHTML = toDoListDiv
          document.querySelector('.toDoInput').value = ""
          attachEditAndDeleteEventListeners()
          let editButtons = document.querySelectorAll('.editButton')
            editButtons.forEach(function(editButton){
              editButton.addEventListener('click', function (){
                let currentEdit = this
                let previousSib = this.parentElement.previousSibling.children[1]
                previousSib.contentEditable = true;
                previousSib.focus()
                previousSib.style.backgroundColor = 'red'
                  previousSib.addEventListener('keypress', function(e){
                    if(e.key === 'Enter'){
                      let toDoIndex = Array.from(document.querySelectorAll('.toDo')).indexOf(previousSib);
                      current.todos[toDoIndex].text = previousSib.textContent
                      previousSib.contentEditable = false;
                      previousSib.style.backgroundColor = 'white'
                    }
                  })
              })
            })
          }
        }
        // Checks to see if there are any completed tasks on the current page, if there are any then it will 
        // send a prompt to the user to either stay on the list or clear all completed tasks
        if (current === undefined){
          document.querySelector('.toDoListName').innerHTML = 'Select A List.'
        }
        else {
            current.todos.forEach(elm => {
              let completeCheck = false
              if(elm.completed === true){
                completeCheck = true
              }
              if(completeCheck === true){
                let switchListConfirmation = confirm ('This action will clear all completed tasks')
                if(switchListConfirmation === true){
                  clearMarkComplete()
                  doNotSwitch = false
                }
                else {
                  doNotSwitch = true
                }
              }
            })
            
            if (doNotSwitch === false){
              document.querySelector('.listItemClicked').classList.toggle('listItemClicked')
              this.classList.toggle('listItemClicked')
              current = lists.find(item => item.name === this.textContent);
              if (current === undefined){
                document.querySelector('.toDoListName').innerHTML = 'Select A List.'
              }
              else {
                attachEditAndDeleteEventListeners()
                document.querySelector('.toDoListName').innerHTML = current.name + 
                '<input class="toDoInput" type="text" placeholder="Enter To Do" name="toDo"></input>' + 
                '<input class="toDoSubmit" onclick="addToDo()" type="submit" name="listname">'+ 
                '<button class="markImportant" onClick="markComplete()"> Mark As Complete </button>' +
                '<button class="submitComplete" onClick="clearMarkComplete()"> Clear Complete Tasks </button>';
                let toDoListDiv = "";
                let checkbox = '<input type="checkbox" class="checkbox">'
                current.todos.forEach((elm) => {toDoListDiv += '<div class="toDoContainer">' +
                '<div>' + checkbox + '<span class="toDo">' + elm.text + '</span>' + '</div>' + 
                '<span class="actionContainer"><i class="editButton fa-regular fa-pen-to-square"></i><i class="deleteButton fa-solid fa-delete-left"></i></div>' + '</span>'})
                document.querySelector('.currentToDos').innerHTML = toDoListDiv
                document.querySelector('.toDoInput').value = ""
                addToDo()
                
                let editButtons = document.querySelectorAll('.editButton')
                editButtons.forEach(function(editButton){
                editButton.addEventListener('click', function (){
                  let currentEdit = this
                  let previousSib = this.parentElement.previousSibling.children[1]
                  previousSib.contentEditable = true;
                  previousSib.focus()
                  previousSib.style.backgroundColor = 'red'
                  previousSib.addEventListener('keypress', function(e){
                    if(e.key === 'Enter'){
                      let toDoIndex = Array.from(document.querySelectorAll('.toDo')).indexOf(previousSib);
                      current.todos[toDoIndex].text = previousSib.textContent
                      previousSib.contentEditable = false;
                      previousSib.style.backgroundColor = 'white'
                    }
                  })
                })
              })
            }
          }
      }
    })
  })
}

// Adds the features for an edit and delete button for list names
function attachEditAndDeleteEventListeners() {
  let listEditButtons = document.querySelectorAll('.listEditButton')
    listEditButtons.forEach(function(editButton){
    editButton.addEventListener('click', function (){
      let editTarget = this.parentElement.previousSibling
      editTarget.contentEditable = true;
      editTarget.focus()
        editTarget.addEventListener('keypress', function(e){
          if(e.key === 'Enter'){
            let toDoIndex = Array.from(document.querySelectorAll('.listEditButton')).indexOf(editButton);
              lists[toDoIndex].name = editTarget.textContent
              editTarget.contentEditable = false;
              document.querySelector('.toDoListName').innerHTML = current.name + 
              '<input class="toDoInput" type="text" placeholder="Enter To Do" name="toDo"></input>' + 
              '<input class="toDoSubmit" onclick="addToDo()" type="submit" name="listname">'+ 
              '<button class="markImportant" onClick="markComplete()"> Mark As Complete </button>' +
              '<button class="submitComplete" onClick="clearMarkComplete()"> Clear Complete Tasks </button>';
              localStorage.setItem('lists', JSON.stringify(lists));
          }
        })
    })
  })

  let listDeleteButton = document.querySelectorAll('.listDeleteButton')
  listDeleteButton.forEach(function(deleteButton){
    deleteButton.addEventListener('click', function (){
      let listItem = this.parentElement.parentElement;
      let listName = listItem.querySelector('.nameList').textContent;
      let index = lists.findIndex(item => item.name === listName);
      if (index > -1) {
        lists.splice(index, 1);
        localStorage.setItem('lists', JSON.stringify(lists));
      }
      listItem.remove();
      if (current && current.name === listName) {
        console.log(current.name)
        current = null;
        document.querySelector('.toDoListName').innerHTML = 'Select A List.';
        document.querySelector('.currentToDos').innerHTML = '';
      }
    });
  })
}



// renders in the list name and sets html to the right side of the page
function render() {
    let listsHtml = '<div class="listContainer">';
    lists.forEach((list) => {
      listsHtml += `<div class="listNameDisplay"><div class="nameList">${list.name}</div>` + '<div class="listActionContainer"><i class="listEditButton fa-regular fa-pen-to-square"></i><i class="listDeleteButton fa-solid fa-delete-left"></i></div></div>';
    });
    listsHtml += '</div>';
    document.querySelector('.listItemsContainer').innerHTML = listsHtml;
    document.querySelector('.toDoListName').innerHTML = 'Select A List.'
    document.querySelector('.listName').value = ''
  }
