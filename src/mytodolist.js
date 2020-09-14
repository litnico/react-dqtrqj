import Todolist from '../components/todolist'
import {connect} from 'react-redux'
import {removeTodo} from '../actions/index'

const mapStateToProps =(state) =>{
    return {
        todos : [...state.todos]
    }
}

const myConnect = connect(mapStateToProps, {removeTodo})
const myTodolist = myConnect(Todolist)

export default myTodolist