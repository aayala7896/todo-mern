const TaskDetails = ({task}) => {
  return(
    <tr>
      <td><strong>{task.completed ? "True" : "False"}</strong></td>
      <td>{task.name}</td>
      <td><strong>{task.priority}</strong></td>
      
    </tr>
  )
}

export default TaskDetails