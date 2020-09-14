import React,{Fragment} from 'react'




 export default function addTodoComponent({addTodo}){

    let todoInput;
    return(

        <Fragment>
            <input ref= { (node)=> { todoInput= node}}></input>
        <button onClick={ () =>{
           addTodo(todoInput.value);
           todoInput.value=''
          }
            }>Add</button>
        </Fragment>
        
    )

}

