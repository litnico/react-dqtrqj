import React from 'react'
import Todo from './todo'

export default function todolist({todos , removeTodo}){
     
    return(
        <ul className='inside'>{
            todos.map((todo , i) => <Todo key={i} id={i} onClick={removeTodo} todo={todo}></Todo>  )
                 }
           </ul>
        
    )
   
}