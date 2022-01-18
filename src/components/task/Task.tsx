import { useState } from 'react'
import { Container,Text,Controls,Button } from './styles'

type PropsType = {
    content: string
    id: string
    deleteTask: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
}

const Task = ({content,id,deleteTask}:PropsType):JSX.Element=>{
    
    const [isTaskDone,setIsTaskDone] = useState(false)

 const doneTask = ()=>{
    setIsTaskDone(!isTaskDone)
 }
    
    return (
        <Container style={{borderLeftColor: isTaskDone?'green':'white'}} className="task-container" id={id}>
        <Text>{content}</Text>
        <Controls>
            <Button onClick={doneTask}>Done</Button>
            <Button onClick={deleteTask}>Delete</Button>
        </Controls>
        </Container>
    )
}

export default Task

