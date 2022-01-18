import { Container, Title, TimerText, Button } from './styles'

type TimerProps = {
    startTimer: ()=> void
    pauseTimer: ()=> void
    restartTimer: ()=> void
    seconds: number
    secondsToTime: (e:number) => string
}

const Timer = ({startTimer,pauseTimer,restartTimer,seconds,secondsToTime}:TimerProps):JSX.Element=>{
    return(
        <Container className="timer-container">
        <Title>Timer</Title>
        <TimerText>{secondsToTime(seconds)}</TimerText>
        <Button onClick={startTimer}>START</Button>
        <Button onClick={pauseTimer}>PAUSE</Button>
        <Button onClick={restartTimer}>RESTART</Button>
        </Container>
    )
}

export default Timer