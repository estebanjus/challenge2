import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function Inicio() {

    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/obtenerProyectos',

            {
                method: 'GET',

                mode: 'cors'
            })

            .then(e => e.json())

            .then(e => {

                setProyectos(e);

            });

    }, []);

    const handleDeleteTask = (project_id, task_id) => {

        fetch('http://localhost:3000/deleteTask',

            {
                method: 'POST',

                mode: 'cors',

                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify({ project_id, task_id })
            })

            .then(e => e.json())

            .then(e => setProyectos(e));

    }

    const handleAddTask = (e, project_id) => {

        const currentTarget = e.currentTarget;

        fetch('http://localhost:3000/addTask',

            {
                method: 'POST',

                mode: 'cors',

                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify({ project_id, descripcion: currentTarget.previousElementSibling.value })
            })

            .then(e => e.json())

            .then(e => {

                setProyectos(e);

                currentTarget.previousElementSibling.value = '';

                currentTarget.parentElement.classList.add('d-none');

                currentTarget.parentElement.previousElementSibling.classList.remove('d-none');

            });

    }

    const handleNewTask = e => {

        e.currentTarget.classList.add('d-none');

        e.target.nextElementSibling.classList.remove('d-none');
    }

    const handleDeleteProject = (project_id, task_id) => {

        fetch('http://localhost:3000/deleteProject',

            {
                method: 'POST',

                mode: 'cors',

                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify({ project_id })
            })

            .then(e => e.json())

            .then(e => setProyectos(e));

    }

    return (
        <>

            <div className="grid-container">
                <h1 className='grid-titulo'>Proyects</h1>
                {

                    proyectos.length ?

                        proyectos.map((item, index) => {

                            return (

                                <div className='grid-item' key={item.id}>

                                    <div className='grid-item-titulo'>{item.name}</div>

                                    {item.tasks.map((task) => <div className='grid-item-tareas' key={task.id}>{task.descripcion} 
                                    
                                    <span className='grid-item-bin' onClick={e => handleDeleteTask(item.id, task.id)}>🗑</span></div>)}

                                    <div onClick={handleNewTask} className='grid-item-add'>New task+</div>

                                    <div className='d-none'>

                                        <input className='grid-item-input' placeholder='descripcion tarea...' />

                                        <div onClick={e => handleAddTask(e, item.id)} className='grid-item-add'>Add task+</div>

                                    </div>

                                    <div className='borrar-proyecto' onClick={e => handleDeleteProject(item.id)}>🗑</div>

                                </div>
                            )
                        })

                        :

                        <div className='grid-item-none'>No projects were created yet.</div>

                }
                <Link className='grid-item-boton' to='/create-proyect' >Create Proyect + </Link>
            </div>



        </>



    )
}
