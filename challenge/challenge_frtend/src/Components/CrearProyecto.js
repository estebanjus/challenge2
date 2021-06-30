import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';

export default function CrearProyecto() {

    const history = useHistory();

    const projectName = useRef();

    const handleNewProject = () => {

        fetch('http://localhost:3000/createNewProject',

            {
                method: 'POST',
                
                mode: 'cors',
                
                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify({ name: projectName.current.value })
            })

            .then(e => e.json())

            .then(e => history.push('/'));

    }

    return (

        <>
            <div className='grid-container-2'>

                <div className='grid-titulo'>Project Name:</div>

                <input type='text' className='grid-item-2' ref={projectName} />

                <button type='text' className='grid-button' onClick={handleNewProject}>Create</button>

            </div>

        </>
    )
}
