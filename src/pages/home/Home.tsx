import { useState, ChangeEvent } from "react"
import { Layout } from "./styles"
import { TasksInput, Task, Timer } from "../../components"

const Home = (): JSX.Element => {

    const [newTask, setNewTask] = useState<string>("")
    const [tasks, setTasks] = useState<string[]>([])
    const [seconds,setSeconds] = useState(3000)
    const [timer,setTimer] = useState<any>()
    const [isTimerRunning,setIsTimerRunning] = useState<boolean>(false)


    const secondsToTime = (secs:number)=>{
    const divisorMinute = secs%3600
    const minutes = Math.floor(divisorMinute/60)
    const seconds = Math.ceil(divisorMinute%60)
    return`${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
    }

    const startTimer = ()=>{
    if(isTimerRunning){
        return ;
    }
    setIsTimerRunning(true)
    const timeInterval = setInterval(()=>{
    setSeconds((prev)=>{
        if(prev===0){
            clearInterval(timeInterval)
            return 0
        }
        return prev-1})
    },1000)
    setTimer(timeInterval)
    }

    const pauseTimer = ()=>{
        setIsTimerRunning(false)
        clearInterval(timer)
        setTimer(undefined)
    }

    const restartTimer = ()=>{
    setSeconds(3000)
    }

    const handleTaskInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    const handleOkClick = () => {
        if (!newTask) {
            return;
        }
        setTasks([...tasks, newTask])
        setNewTask("")
    }

    const deleteTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const id = e.currentTarget.parentElement?.id
        const copy = [...tasks]
        copy.splice(Number(id), 1)
        setTasks(copy)
    }


    return (
        <Layout>
            <Timer startTimer={startTimer} pauseTimer={pauseTimer} restartTimer={restartTimer} seconds={seconds} secondsToTime={secondsToTime} />
            <TasksInput value={newTask} onChange={handleTaskInputChange} onClick={handleOkClick} />
            {tasks.map((item, index) => <Task key={index} id={index.toString()} content={item} deleteTask={deleteTask} />)}
        </Layout>
    )
}

export default Home

