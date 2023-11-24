import Addtodo from "./components/Addtodo";//import addtodo components,it gives the text and date and button format//
import AppName from "./components/AppName"; //import AppName component,heading of the project TODO APP,AppName written this  component //
import TodoItems from "./components/TodoItems";//import todoitems components,it contains the item list.
import "./App.css";     //it use to import the css.
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {
  

  const [TodoItemds, setTodoItems] = useState([]);// usestate is an hook..,todoitemds is an array it use to hold the items and settodoitems is a function use to update this state

  const handleNewItem = (itemName, itemDueDate) => {    //this function helps to add new item,with two parameter
    console.log(`new item added: ${itemName} date: ${itemDueDate}`);
    const newTodoItems =[
      ...TodoItemds,{          //first it creats a again new array(newTodoItems),todotemds helps to add a items by using ....spread 
                                                        //operator..it use for copy of the array
  name:itemName, duedate:itemDueDate},
      
    ];
    setTodoItems(newTodoItems);
    // it update the array
  };

const handleDeleteItem =(todoitemName) => { //it creats a new parameter todoitemName,and then create a new array with newTodoItems
  const newTodoItems= TodoItemds.filter (item => item.name !== todoitemName);//here todoitemds contain value but not equal to todoitemname becaue it was empty,so if we click the delete button then it will deleted
  setTodoItems(newTodoItems);//it wiil delete the item
  
}


  return (
    <center className="todo-container">
      <AppName />         {/* 2.This is the heading of the todo app */}
      <Addtodo onNewItem={handleNewItem} />  {/*3. addtodo,this display the input text button,date text,and add button */}
     {TodoItemds.length === 0 &&  <WelcomeMessage></WelcomeMessage>}  {/* if item is less then or equal to zero then print enjoy ur day */}
      <TodoItems TodoItems={TodoItemds} onDeleteClick={handleDeleteItem} /> {/*4.todoitems is used to add the items  */}
    </center>
  );
}

export default App;
