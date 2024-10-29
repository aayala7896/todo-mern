import {useEffect, useState} from 'react'

const TaskForm = () => {
    const [name,setName] = useState('')
    const [priority,setPriority] = useState('High')
    const [status,setStatus] = useState(false)
    const [error,setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const Task = {name, priority, status}

        const response = await fetch('http://localhost:5050/record',{
            method: 'POST',
            body: JSON.stringify(Task),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setName('')
            setPriority('High')
            setStatus(false)
            setError(null)
            console.log('New Task Added')

        }
    }
    return(
        <form className="" onSubmit={handleSubmit}>
            <div className="mt-8">
            <h4>Add a New Task</h4>
                <div className="bg-white shadow rounded-lg py-4 px-4">
                
                <div class="px-4">
                    
                    <div className="mt-1">
                    <label className="block text-sm font-medium text-gray-700">Task:</label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="mt-2 block flex-1 border border-gray-300 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                        placeholder='Task'
                    />
                    </div>
                    <div className="mt-1">
                    <label className="text-sm ">Priority:
                    <select name="selectedPriority" onChange={(e)=> setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    </label>
                    </div>
                    <button className="w-full flex justify-center py-2 px-4 mt-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-light-blue hover:bg-dark-blue">Add Task</button>
                </div>
                </div>
            </div>
        </form>
    )
}

export default TaskForm;