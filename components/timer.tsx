import Clock from './clock'
import useTimer from '../utils/hooks/use_timer'

export default function Timer({ seconds }: { seconds: number }) {
  const [state, { play, pause, reset }] = useTimer(seconds)
  const { currentSeconds } = state

  return (
    <>
      <div>
        <Clock totalSeconds={currentSeconds} />
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

