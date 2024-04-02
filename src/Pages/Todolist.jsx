import React,{useState} from 'react'
import Header from '../Components/Header'
import '../css/todolist.css'

function Todolist() {

  const [tasks, setTasks] = useState(["Eat Breakfast","Take a shower","Go to work"]);
  const [newTask, setNewTask] = useState("");
  const [checkedTasks, setCheckedTasks] = useState([]);


  function handleCheckboxChange(index) {
    const newCheckedTasks = [...checkedTasks];
    if (newCheckedTasks.includes(index)) {
      const indexToRemove = newCheckedTasks.indexOf(index);
      newCheckedTasks.splice(indexToRemove, 1);
    } else {
      newCheckedTasks.push(index);
    }
    setCheckedTasks(newCheckedTasks);
  }


  function handleInputChange(event){
    setNewTask(event.target.value)
  }

  function addTask(){
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }

  }

  function deleteTask(index){
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  return (
    <div>
      <Header/>
      <div className='w3-center'>
      <h1>Todolist</h1>

      <div>
        <input type="text"
               placeholder="Enter a task..." 
               value={newTask}
               onChange={handleInputChange} />

        <button className='' onClick={addTask}>
          Add
        </button>
      </div>

      </div>
      <div className='w3-responsive' style={{margin: "100px"}}>
      <table className="w3-table-all w3-mobile" >
       
            {tasks.map((task, index) => 
             <tr className=" ">
              <td></td>
              <td  className=' ' key={index}>
                    <input className="w3-check " type="checkbox" onChange={() => handleCheckboxChange(index)}
                checked={checkedTasks.includes(index)} />
                    <label className={checkedTasks.includes(index) ? 'taskCompleted' : ''} > {task} </label>
  
              </td>
            <td>
                    <button className='w3-btn w3-button w3-purple w3-hover-red'
                            onClick={() => deleteTask(index)}>
                      Delete
                    </button>   
              </td>              
              </tr>
            )}
         
        </table>
        </div>
    </div>
  )
}

export default Todolist