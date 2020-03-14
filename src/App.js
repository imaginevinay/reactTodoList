import React,{useState} from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/Addtodo';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  let state = {
    todos:[
    {
      title:"First Todo",
      completed : false
    },
    {
      title:"Second Todo",
      completed : true
    },
    {
      title:"Third Todo",
      completed : false
    }
  ]
}

let [todos,setTodos] = useState(state.todos);

let markComplete = (id)=>{
  let newTodos = [...todos];
  newTodos[id].completed = !newTodos[id].completed;
  setTodos(newTodos)
}

let markDelete = (id)=>{
  let newTodos = [...todos];
  newTodos.splice(id,1)
  setTodos(newTodos)
}

let addTodo = (data)=>{
  let newTodos = [...todos]
  newTodos.push(data);
  setTodos(newTodos);
}

// let updateTodo = (id,data)=>{
//   let newTodos = [...todos];
//   newTodos[id].title = data;
//   setTodos(newTodos);
// }


  return (
    
      <div className="App">
        <div className="container">          
            <Header />
            <div className="card">
              <AddTodo addTodo={addTodo}/>
              <Todos todos = {todos} markComplete={markComplete} markDelete={markDelete}/>
            </div>         
        </div>
        <Footer />
      </div>
    
      
    );
}

export default App;