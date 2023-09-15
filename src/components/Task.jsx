import React, { useState } from 'react';

const Task = () => {
    const [nameTask, setNameTask] = useState("");
    const [listTask, setListTask] = useState([]);
    const [campo, setCampo] = useState(false);

    const sendForm = (e) => {
        e.preventDefault();

        if (!nameTask.trim()) {
            setCampo(true);
            return;
        } else {
            setCampo(false);
        }

        setListTask([...listTask, nameTask]);
        setNameTask(" ");
    };

    const captureTask = (e) => {
        setNameTask(e.target.value);
    };

    const deleteTask = (index) => {
        const newList = listTask.filter((task, i) => i !== index);
        setListTask(newList);
    };

    return (
        <>
            <div className="formTask">
                <form onSubmit={sendForm}>
                    <input type="text" onChange={captureTask} value={nameTask} placeholder="Add task" />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {listTask.map((task, index) => (
                        <li key={index}>
                            - {task}
                            <button className='bDelete' onClick={() => deleteTask(index)}>X</button>
                        </li>
                    ))}
                </ul>
                {listTask.length === 0 ? <h3>No hay Tareas Pendientes</h3> : <h3>Numero de Tareas: {listTask.length}</h3>}
            </div>
            {campo ? <p className='alert'>El Campo Agregar Tarea no puede estar vacio</p> : null}
        </>
    );
};

export default Task;
