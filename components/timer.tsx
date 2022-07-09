import Clock from './clock'
import { TimerAction, useTimer } from '../utils/hooks/use_timer'

export default function Timer({ seconds }: { seconds: number }) {
  const [state, dispatch] = useTimer(seconds)
  const { currentSeconds } = state

  return (
    <>
      <div>
        <Clock totalSeconds={currentSeconds} />
        <button onClick={() => { dispatch({ type: TimerAction.PLAY }) }}>Play</button>
        <button onClick={() => { dispatch({ type: TimerAction.PAUSE }) }}>Pause</button>
        <button onClick={() => { dispatch({ type: TimerAction.RESET }) }}>Reset</button>
      </div>
    </>
  )
}

