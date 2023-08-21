
import './App.css';
import React,{ useState } from "react";
import { Task } from "./Task";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    //traditional javascript
    // int arr = [];
    // const name = "veer";
    // arr.push(name);

    //in react  using spread operator (prev array -> ...todoList + newTask)
    // const newTodoList = [...todoList, newTask];

    // using objects notaion for giving id to each task
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed:false,
    };

    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    // const newTodoList = todoList.filter((task) => {
    //   if( task === taskName ) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });

    // setTodoList(newTodoList);

    //shortcut
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task 
              taskName={task.taskName}
              id={task.id} 
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
