import React, { Component } from 'react';

import './App.css';

import Addtodos  from './components/addtodo'
import Header from './components/header'
import MyTodolist from './containers/mytodolist';



class App extends Component {

  constructor(){
    super();
    this.state={
      todos:[]
    }

  //  this.todoInput=React.createRef();

  }



 



  render(){
    return (
      <div className="App">
        <Header></Header>
        <div className='container'>
        <Addtodos></Addtodos>
        <MyTodolist></MyTodolist>
        </div>
       
      </div>
    );
  }
  }
 

export default App;
