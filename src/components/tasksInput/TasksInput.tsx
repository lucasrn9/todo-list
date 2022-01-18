import { ChangeEvent } from 'react'
import { Container,Wrapper,Input,Button,Text } from './styles'

type PropsType = {
    value: string
    onChange: (e:ChangeEvent<HTMLInputElement>) => void
    onClick: ()=>void
}

const TasksInput = ({value,onChange,onClick}:PropsType):JSX.Element=>{
return (
    <Container className="tasks-input-container">
        <Text>Tasks</Text>
        <Wrapper className="tasks-input-wrapper">
            <Input type="text" value={value} onChange={(e)=>onChange(e)} name="tasks-input" placeholder="Enter a task name here ..." />
            <Button onClick={onClick}>Ok</Button>
        </Wrapper>
    </Container>
)
}

export default TasksInput

