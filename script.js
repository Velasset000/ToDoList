
const lists = []
   let currentList;
   var addIndex = (function(){
    var index = -1;
    return function (){return index += 1;}
  })();
  



function addList(){
  let newList = {
    name: document.querySelector('.listName').value,
    todos: [
      {
      text: '',
      completed: false
      }
    ],
     index: addIndex()
  }
  console.log(addIndex())
  lists.push(newList);
  currentList = lists[0]
  console.log(lists);
  console.log(Object.values(newList))
  render();
  document.querySelectorAll('.listNameDisplay').forEach((elm) => {
    elm.addEventListener('click',function(){
      if (document.getElementsByClassName('listItemClicked').length < 1) {
      this.classList.toggle('listItemClicked')
      document.querySelector('.toDoListName').innerHTML = currentList.name + '<input class="toDoInput" type="tetx" placeholder="Enter To Do" name="toDo"></input>' + '<input class="toDoSubmit" type="submit" name="listname">';
      console.log(this.textContent)
      this.textContent 
      }
      else {
        document.querySelector('.listItemClicked').classList.toggle('listItemClicked')
        this.classList.toggle('listItemClicked')
        document.querySelector('.toDoListName').innerHTML = currentList.name + '<input class="toDoInput" type="tetx" placeholder="Enter To Do" name="toDo"></input>' + '<input class="toDoSubmit" type="submit" name="listname">';
        console.log(this.textContent)
      }
    })

  })
}
  
// var addIndex = (function(){
//   var index = -1;
//   return function (){return index += 1;}
// })();



function render() {
    let listsHtml = '<ul class="listContainer">';
    lists.forEach((list) => {
      listsHtml += `<li class="listNameDisplay">${list.name}</li>`;
    });
    listsHtml += '</ul>';
    document.querySelector('.listItemsContainer').innerHTML = listsHtml;
    document.querySelector('.toDoListName').innerHTML = 'Select A List.'
    
  }



  // listItem.addEventListener('click', function(){
  //   if (document.getElementsByClassName('listItemClicked').length < 1) {
  //       this.classList.toggle('listItemClicked')
  //       toDoList.innerHTML = ""
  //       toDO.innerHTML = listName + '<input class="toDoItemInput" type="text" placeholder="Enter To Do..." name="todo"><input onClick="toDoAdd()" class="toDoItemCreateButton" type="submit" name="listname">'
  //       createToDoList.innerHTML = '<input class="toDoItemInput" type="text" placeholder="Enter To Do..." name="todo"><input class="toDoItemCreateButton" type="submit" name="listname">'
  //       toDoList.appendChild(toDO)
  //   }
  //   else {
  //       document.querySelector('.listItemClicked').classList.toggle('listItemClicked')
  //       this.classList.toggle('listItemClicked')
  //       toDoList.innerHTML = ""
  //       toDO.innerHTML = listName + '<input class="toDoItemInput" type="text" placeholder="Enter To Do..." name="todo"><input onClick="toDoAdd()" class="toDoItemCreateButton" type="submit" name="listname">'
  //       toDoList.appendChild(toDO)
  //   }
  // })


// document.querySelector('.listItemDisplay').addEventListener('click', function(){
//   if (document.getElementsByClassName('listItemClicked').length < 1) {
//       this.classList.toggle('listItemClicked')
//   }
//   else {
//       document.querySelector('.listItemClicked').classList.toggle('listItemClicked')
//       this.classList.toggle('listItemClicked')
//       toDoList.innerHTML = ""
//       toDO.innerHTML = listName
//       toDoList.appendChild(toDO)
//   }
// })






// function submitList(){
//     let listName = document.querySelector('.listName').value;
//     let listNameRest = document.querySelector('.listName');
//     let listItemsContainer = document.querySelector('.listItemsContainer');
//     let listItemArr = [];
//     if (listName.length === 0){
//         alert ('Please input the name of your list')
//     }
//     else {
//     let listItem = document.createElement('div');
//         listItem.classList.add('listItem');
//         listItem.textContent = listName;
//         listItemArr.push(listName);
//         listItemsContainer.appendChild(listItem);
//         listNameRest.value = "";
//     let toDoList = document.querySelector('.toDoList')
//     let toDO = document.createElement('div')
//         toDO.classList.add('toDoItemHeader')
//     let createToDoList = document.createElement('div')
//         createToDoList.classList.add('createList')
//         listItem.addEventListener('click', function(){
//             if (document.getElementsByClassName('listItemClicked').length < 1) {
//                 this.classList.toggle('listItemClicked')
//                 toDoList.innerHTML = ""
//                 toDO.innerHTML = listName
//                 createToDoList.innerHTML = '<div>'
//                 toDoList.appendChild(toDO)

//             }
//             else {
//                 document.querySelector('.listItemClicked').classList.toggle('listItemClicked')
//                 this.classList.toggle('listItemClicked')
//                 toDoList.innerHTML = ""
//                 toDO.innerHTML = listName
//                 toDoList.appendChild(toDO)
//             }
//         })
//     }
// }


// function render() {
//     // this will hold the html that will be displayed in the sidebar
//     let listsHtml = '<ul class="list-group">';
//     // iterate through the lists to get their names
//     lists.forEach((list) => {
//       listsHtml += `<li class="list-group-item">${list.name}</li>`;
//     });
   
//     listsHtml += '</ul>';
//     // print out the lists
   
//     document.getElementById('lists').innerHTML = listsHtml;
//     // print out the name of the current list
   
//     document.getElementById('current-list-name').innerText = currentList.name;
//     // iterate over the todos in the current list
   
//     let todosHtml = '<ul class="list-group-flush">';
//     currentList.todos.forEach((list) => {
//       todosHtml += `<li class="list-group-item">${todo.text}</li>`;
//     });
//     // print out the todos
//     document.getElementById('current-list-todos').innerHTML = todosHtml;
//    }


// document.querySelectorAll('.listNameDisplay').forEach((elm) => {
//   if (elm.classList.contains('.listItemClicked')){
//     let test = true;
//     console.log(test)
//   }
//   else {
//     let test = false;
//     console.log(test)
    
//   }
// })