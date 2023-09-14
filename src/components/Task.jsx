const Task = () => {

    const listTask = [Task]

    const sendForm = (e) => {
    e.preventDefault()
    console.log('sendForm')
    }

    const captureTask = (e) => {
        console.log(e.target.value)
    }
  
    return (
        <>
            <form onSubmit={sendForm}>
                <input type="text" onChange={captureTask} placeholder="Add task" />
                <button>Add</button>
            </form>
            <ul>
                {listTask.map(task =>  <li key={task}>{task}</li>)}
            </ul>
        </>
    )



}

export default Task;