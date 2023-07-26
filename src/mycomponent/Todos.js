import React from 'react'
import Todoitem from "./Todoitem";
 const Todos = (props) => {
  let myStyle={
      minHeigth:"70vh"
  }
  return (
    <div className='Container mx-5 my-3 py-5'style={myStyle}>
      <h3 className='my-5'>Todos List </h3>
     {props.todos.length===0 ?"No todos to Display":
      props.todos.map((todo)=>{
     return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>  
     })}
      

    </div>
  )
}

export default Todos
