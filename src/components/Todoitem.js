import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const todoItems = (props)=>{
    const {title} = props.todo
    const id = props.index;
    let getStyle = () => {
        return {
            padding:"1vw",
            textDecoration : props.todo.completed ? 'line-through':'none'
        }
    }
    return (
        <Card variant="outlined" style={getStyle()}>
            <h3>
            <Checkbox            
            onChange={props.markComplete.bind(this,id)}
            color="primary"/>
            {' '}
            {title}
            <Button size="small"  style={{float:"right",marginTop:"5px"}} variant="contained" color="secondary" onClick={props.markDelete.bind(this,id)}>
                Delete
            </Button>
            </h3>
        </Card>
    )
}

export default todoItems;