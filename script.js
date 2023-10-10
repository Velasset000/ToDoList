
const lists = []
let currentList;
let current;
let newDiv;
const counter = index();
function index() {
    let count = 0;
    return function(){
      count++ 
      return count
    } 
}
// let addToDo = function(){
//   let newList = {
//     name: document.querySelector('.listName').value,
//     todos:[]
//   }
// }
function markComplete(){
  let checkbox = document.getElementById('checkbox');
  if (checkbox.checked) {
    console.log('checked')
  }
  else {
    console.log('not checked')
  }
}
function addToDo(){
  // let newToDo
   let toDoInput = document.querySelector('.toDoInput').value;
   current.todos.push({'text': toDoInput, 'completed': false})
   let toDoListDiv = "";
   let checkbox = '<input type="checkbox" id="checkbox">'
   current.todos.forEach((elm) => {toDoListDiv += '<div class="toDoContainer">' +
    '<div>' + checkbox + '<span class="toDo">' + elm.text + '</span>' + '</div>' + 
    '<span class="actionContainer"><i class="editButton fa-regular fa-pen-to-square"></i><i class="fa-solid fa-delete-left"></i></div>' + '</span>'})
   document.querySelector('.currentToDos').innerHTML = toDoListDiv
  document.querySelector('.toDoInput').value = ""
  let editButtons = document.querySelectorAll('.editButton')
  editButtons.forEach(function(editButton){
    editButton.addEventListener('click', function (){
      let currentEdit = this
      let previousSib = this.parentElement.previousSibling.children[1]
      previousSib.contentEditable = true;
      console.log(previousSib.textContent)
      previousSib.style.backgroundColor = 'red'
      previousSib.addEventListener('keypress', function(e){
        if(e.key === 'Enter'){
          let toDoIndex = Array.from(document.querySelectorAll('.toDo')).indexOf(previousSib);
          console.log(toDoIndex)
          current.todos[toDoIndex].text = previousSib.textContent
          console.log(toDoIndex)
          previousSib.contentEditable = false;
          previousSib.style.backgroundColor = 'white'
          console.log(current.todos)
        }
      })
    })
  })
 }
function addList(){
  let newList = {
    name: document.querySelector('.listName').value,
    todos: []
  }
  document.querySelector('.currentToDos').innerHTML = ""
  lists.push(newList);
  currentList = lists[0]
  render();
  document.querySelectorAll('.listNameDisplay').forEach((elm) => {
    elm.addEventListener('click',function(){
      if (document.getElementsByClassName('listItemClicked').length < 1) {
      this.classList.toggle('listItemClicked')
      current = lists.find(item => item.name === this.textContent);
      document.querySelector('.toDoListName').innerHTML = current.name + 
      '<input class="toDoInput" type="text" placeholder="Enter To Do" name="toDo"></input>' + 
      '<input class="toDoSubmit" onclick="addToDo()" type="submit" name="listname">' + 
      '<button class="markImportant" onClick="markComplete()"> Mark As Complete </button>';
      let toDoListDiv = "";
      let checkbox = '<input type="checkbox" id="checkbox">'
      current.todos.forEach((elm) => {toDoListDiv += '<div class="toDoContainer">' +
    '<div>' + checkbox + '<span class="toDo">' + elm.text + '</span>' + '</div>' + 
    '<span class="actionContainer"><i class="editButton fa-regular fa-pen-to-square"></i><i class="fa-solid fa-delete-left"></i></div>' + '</span>'})
   document.querySelector('.currentToDos').innerHTML = toDoListDiv
      document.querySelector('.toDoInput').value = ""
      let editButtons = document.querySelectorAll('.editButton')
      editButtons.forEach(function(editButton){
    editButton.addEventListener('click', function (){
      let currentEdit = this
      let previousSib = this.parentElement.previousSibling.children[1]
      previousSib.contentEditable = true;
      console.log(previousSib.textContent)
      previousSib.style.backgroundColor = 'red'
      previousSib.addEventListener('keypress', function(e){
        if(e.key === 'Enter'){
          let toDoIndex = Array.from(document.querySelectorAll('.toDo')).indexOf(previousSib);
          console.log(toDoIndex)
          current.todos[toDoIndex].text = previousSib.textContent
          console.log(toDoIndex)
          previousSib.contentEditable = false;
          previousSib.style.backgroundColor = 'white'
          console.log(current.todos)
        }
      })
    })
    })
      }
      else {
        document.querySelector('.listItemClicked').classList.toggle('listItemClicked')
        this.classList.toggle('listItemClicked')
        current = lists.find(item => item.name === this.textContent);
        document.querySelector('.toDoListName').innerHTML = current.name + 
        '<input class="toDoInput" type="text" placeholder="Enter To Do" name="toDo"></input>' + 
        '<input class="toDoSubmit" onclick="addToDo()" type="submit" name="listname">'+ 
        '<button class="markImportant" onClick="markComplete()"> Mark As Complete </button>';
        let toDoListDiv = "";
        let checkbox = '<input type="checkbox" id="checkbox">'
        current.todos.forEach((elm) => {toDoListDiv += '<div class="toDoContainer">' +
        '<div>' + checkbox + '<span class="toDo">' + elm.text + '</span>' + '</div>' + 
        '<span class="actionContainer"><i class="editButton fa-regular fa-pen-to-square"></i><i class="fa-solid fa-delete-left"></i></div>' + '</span>'})
        document.querySelector('.currentToDos').innerHTML = toDoListDiv
        document.querySelector('.toDoInput').value = ""
        let editButtons = document.querySelectorAll('.editButton')
        editButtons.forEach(function(editButton){
        editButton.addEventListener('click', function (){
          let currentEdit = this
          let previousSib = this.parentElement.previousSibling.children[1]
          previousSib.contentEditable = true;
          previousSib.style.backgroundColor = 'red'
          previousSib.addEventListener('keypress', function(e){
            if(e.key === 'Enter'){
              let toDoIndex = Array.from(document.querySelectorAll('.toDo')).indexOf(previousSib);
              current.todos[toDoIndex].text = previousSib.textContent
              previousSib.contentEditable = false;
              previousSib.style.backgroundColor = 'white'
              console.log(current.todos)
            }
          })
        })
      })
        }
      })
    })
}


function render() {
    let listsHtml = '<ul class="listContainer">';
    lists.forEach((list) => {
      listsHtml += `<li class="listNameDisplay">${list.name}</li>`;
    });
    listsHtml += '</ul>';
    document.querySelector('.listItemsContainer').innerHTML = listsHtml;
    document.querySelector('.toDoListName').innerHTML = 'Select A List.'
    document.querySelector('.listName').value = ''
  }





  //  var addIndex = (function(){
  //   var index = -1;
  //   return function (){return index += 1;}
  // })();



  // newToDo = document.createElement('div')
  // let toDoListText = elm.text
  // newToDo.textContent = toDoListText;
  // toDoListDiv = '<div class="toDoListItem">' + toDoListText + '<div>'
  // console.log(elm.text)