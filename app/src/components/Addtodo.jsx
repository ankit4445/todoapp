import { useState } from "react"; //this import useState hook from react library
import { MdAddComment } from "react-icons/md";
function Addtodo({ onNewItem }) {
  const [todoname, setTodoName] = useState(''); //todoname is used to hold the current value of the state,setTodoname is used to update   
  const [duedate, setDueDate] = useState('');                                           //the data
  

  const handleNameChange = (event) => {  //this functuion is called when user type the input field ,it update the todoname state with  
    setTodoName(event.target.value);                                          //current value
                                        //this syntax update the todoname
  };

  const handleDateChange = (event) => { //same as above
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked =() =>
  {
    onNewItem(todoname,duedate);     //it add the item ,it goes to onNewItem and add todoname,duedate
    setDueDate("");       //reset the state ..it keeps empty string in the text box after user submit the dtae
    setTodoName("");       //same ..it keeps empty after user click submit button
  }

  return (
    <div className="container text-center ">     {/*from, hear input text,date text,add button given in this code */}
      <div className="row kg-row ">            {/* kg-row css helps to increase the margin */}
        <div className="col-6"> 
          <input type="text" value={todoname} placeholder="enter todo here" onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date"value={duedate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <div className="ank">
            <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>
            <MdAddComment />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
