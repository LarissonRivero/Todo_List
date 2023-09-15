import { useState } from 'react';

const Task = () => {

    const [nameTask, setNameTask] = useState(" ");
    const [listTask, setListTask] = useState([]);
    const [campo, setCampo] = useState('false');

    const sendForm = (e) => {
    e.preventDefault()

    if(!nameTask.trim()){
        setCampo('true')
        return
    }

    setListTask([...listTask, nameTask])
    setNameTask(" ")
    }

    const captureTask = (e) => {
    setNameTask(e.target.value)
    }
  
    return (
        <>
            <div className="formTask">
                <form onSubmit={sendForm}>
                    <input type="text" onChange={captureTask} value= {nameTask} placeholder="Add task" />
                    <button>Add</button>
                </form>
                <ul>
                    {listTask.map(task => <li key = {task}>{task}</li>)}
                </ul>
            {listTask.length === 0 ? <p>No hay Tareas Pendientes</p> : <p>Numero de Tareas: {listTask.length}</p>}
            </div>
            {campo === 'true' ? <p>El campo esta vacio</p> : <p>El campo no esta vacio</p>}
        </>
    )
}

export default Task;