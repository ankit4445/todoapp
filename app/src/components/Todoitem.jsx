import { MdAutoDelete } from "react-icons/md"; //it uses for react icons delete button

function Todoitem({todoname,tododate,onDeleteClick}){  //function with 3 parameters
  return (
   
    <div className="container ">
    <div className="row kg-row">
      <div className="col-6">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
      <button type="button" className="btn btn-danger kg-button" onClick={() => onDeleteClick(todoname)}><MdAutoDelete /></button>  {/*it will helps to delete the item with identification with name todoname */}
      </div>
    </div>

</div>

  );
}
export default Todoitem;