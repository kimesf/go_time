import { useTimer } from '../utils/hooks/use_timer'
import Clock from './Clock'

const Timer = ({ seconds }: { seconds: number }) => {
  const { time, play, pause, reset } = useTimer(seconds)

  return (
    <>
      <div>
        <Clock time={time} />
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default Timer
