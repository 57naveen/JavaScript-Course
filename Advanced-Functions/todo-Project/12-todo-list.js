const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(
    (todoObject, index) => {

      const {
        name,
        dueDate
      } = todoObject;

      const html = `
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button
    class="delete-todo-button js-delete-ToDo-btn">Delete</button>
    `;
      todoListHTML += html;
    }
  );


  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  //queryselectAll() will give the all elements on the page 
  document.querySelectorAll('.js-delete-ToDo-btn')
    .forEach((deletButton, index) => {
      deletButton.addEventListener('click',()=>
      {
        todoList.splice(index,1);
        renderTodoList();
      })

    })




}


document.querySelector('.js-add-ToDo')
  .addEventListener('click', () => {
    addTodo();
  });


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  //Get the value from the textbox  
  const name = inputElement.value;

  const dateinputElement = document.querySelector('.js-date-input');
  const dueDate = dateinputElement.value;

  //Push the value to an array 
  //now pushing object value inside the array 
  todoList.push({
    name: name,
    dueDate: dueDate

    //Shorthand property syntax
    //if the property and value name are same you can use the shorthand syntax like below
    // name,
    // dueDate
  });

  console.log(todoList);

  //It will reset the text inside the text box after click the add button 
  inputElement.value = '';
  dateinputElement.value = '';


  renderTodoList();

}