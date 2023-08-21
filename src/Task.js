export const Task = (props) => {
    return (
        <div 
            className="task"
            style={{ backgroundColor: props.completed ? "green" : "white"}}
        >
            <h1>{props.taskName}</h1>
            <button className="x" onClick={() => props.deleteTask(props.id)}> x </button>
            <button className="completed" onClick={() => props.completeTask(props.id)}>Completed</button>
        </div>
    );
};