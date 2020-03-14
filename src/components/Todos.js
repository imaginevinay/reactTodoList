import React from 'react';
import TodoItem from './Todoitem';

const Todos = (props) =>{
        console.log("todos props",props.todos)

        return props.todos.map((todo,index) => (
            <TodoItem key={index} todo={todo} index = {index} markComplete = {props.markComplete} markDelete={props.markDelete}/>
        ))
}

export default Todos;