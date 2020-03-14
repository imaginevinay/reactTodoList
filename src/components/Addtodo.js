import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddTodo = (props)=>{
    let [value,setValue] = useState("");

    const handleChange = (e)=>{
        e.preventDefault();
        if(value !== ""){
            props.addTodo({
                title:value,
                completed : false
              })
              setValue("")
        }
        
        
    }

    return(
        <form onSubmit={handleChange} style={{display:'flex',marginBottom:"10vh"}}>
            <TextField height="50%" id="outlined-basic" label="Add Todo" variant="outlined" style={{flex:"10"}} placeholder="Add Todo" onChange={(e)=>setValue(e.target.value)} />
            <Button size="small" type="submit" style={{flex:"1"}} variant="contained" color="primary">Add</Button>
        </form>
    )
}



// let handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log("e",e)
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
//    console.log("event add",e)
//   };

export default AddTodo