import { toggleTodo,VISIBILITY_TYPES } from '../../actions';
import {connect} from 'react-redux';
import TodoList from './List';

const VisibleTodo = (todos,filter)=>{
    switch(filter){

        case VISIBILITY_TYPES.ALL: return todos

        case VISIBILITY_TYPES.COMPLETED: return todos.filter( x=> x.completed )

        case VISIBILITY_TYPES.ALL: return todos.filter(x=>!x.completed)

        default: return todos
    }
}

const mapStateToProps = state => ({
    todos: VisibleTodo(state.todos, state.visibilityFilters)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
  })

export default connect (mapStateToProps,mapDispatchToProps)(TodoList)