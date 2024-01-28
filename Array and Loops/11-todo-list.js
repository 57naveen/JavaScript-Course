const todoList =[];

renderTodoList();

function renderTodoList()
{
  let todoListHTML = '';
   
  for(let i =0; i< todoList.length; i++)
  {
    const todoObject = todoList[i];
    

    // const name= todoObject.name;
    // const dueDate = todoObject.dueDate;

    //Destructuring
    //Another ways to get the value fromn the object
    const{name,dueDate} = todoObject;
   

    //Generating HTML using Javascript
    const html = `
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button
    onclick="
    todoList.splice(${i},1);
    renderTodoList();
    "class="delete-todo-button">Delete</button>
    `;
    todoListHTML +=html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML= todoListHTML;


}


function addTodo()
{
   const inputElement= document.querySelector('.js-name-input');

 //Get the value from the textbox  
 const name= inputElement.value;

 const dateinputElement = document.querySelector('.js-date-input');
 const dueDate = dateinputElement.value;

 //Push the value to an array 
 //now pushing object value inside the array 
 todoList.push(
  {
    name:name,
    dueDate:dueDate

   //Shorthand property syntax
   //if the property and value name are same you can use the shorthand syntax like below
    // name,
    // dueDate
  }
 );

 console.log(todoList);

 //It will reset the text inside the text box after click the add button 
 inputElement.value='';
 dateinputElement.value='';

 
 renderTodoList();

}
