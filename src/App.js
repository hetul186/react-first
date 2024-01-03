
import './App.css';
import { useState } from 'react'
function App() {
//   const Users=
//   [
//   {name:"Hetul", age:22},
//   {name:"Rudra" ,age:19},
//   {name:"Chirag" ,age:21}
// ]
//" ,isgasPlanet:true},
//]
// const [age ,setAge] = useState(0)
// const increaseAge =()=>{
// setAge(age + 1)
// }
// const [count ,setCount] = useState("0")
// const increase = () => {
//   setCount(count+1)
// }
// const decrease = () => {
//   setCount(count-1)
// }
// const set = () => {
//   setCount(0)
// }
//  return (
//   <div className='App'>
// <button onClick={increase}>INCREASE</button>
// <button onClick={decrease}>DECREASE</button>
// <button onClick={set}>SET TO ZERO</button> 
//   {count}
//   </div>
//  )
const [todoList, setTodoList] = useState([])
const [newTask,setNewTask]=useState("")
const handleChange = (event) =>{
setNewTask(event.target.value)
}
const addTask =() =>{
  const task={
    id: todoList.length===0?1:todoList[todoList.length-1].id+1,
    taskName:newTask
  }
  const newTodoList =[...todoList,task]
  setTodoList(newTodoList) 
}
 const deleteTask=(id)=>{
  const newTodoList= todoList.filter((task)=>{
    if(task.id === id){
      return false
    }
    else{
      return true
    }
  })
  setTodoList(newTodoList)
 }
return(<div className='App'>
  <div className='addTask'>
    <input onChange={handleChange}/>
    <button onClick={addTask}>Add Task</button>
  </div>
  <div className='list'>
{todoList.map((task) =>{
  return (
  <div>
    
    <h1>{task.taskName}</h1>
  <button onClick={() => deleteTask(task.id)}>X</button>
  </div>

 )})}
  </div>
</div>
)
}
export default App;
