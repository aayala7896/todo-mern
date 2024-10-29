import {useEffect, useState} from 'react'
import TaskDetails from '../components/Record'
import TaskForm from '../components/taskform'
const Home = () => {
    const [task, setTasks] = useState(null)

    useEffect(() =>{
        const fetchTask = async () => {
            const response = await fetch('http://localhost:5050/record/')
            const json = await response.json()

            if (response.ok){
                setTasks(json)
                console.log(json)
            }
        }
        fetchTask()
    },[])
    return (
        <div className = "max-w-screen-lg mx-auto prose prose-base lg:prose-xl grid grid-cols-4 gap-4 py-3">
            
            <div className="col-span-3 py-3 Task">
                <table class="table-auto">
                    
                    <thead>
                        <tr className="prose-xl">
                            <th>Status</th>
                            <th>Task</th>
                            <th>Priority</th>   
                        </tr>
                    </thead>
                    <tbody>
                    
                    {task && task.map((singleTask) =>(
                    <TaskDetails key={singleTask._id} task={singleTask} />
                    
                ))}
                
                </tbody>
                </table>
            </div>
            <div className="col-span-1 flex justify-center items-center ml-20">
                <div className="min-h-screen">
            <TaskForm />
            </div>
            </div>
            
        </div>
    )


}

export default Home;