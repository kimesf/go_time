import Clock from './Clock'
import styled from 'styled-components'
import { useTimer } from '../utils/hooks/use_timer'
import { useEffect } from 'react'

const Timer = ({ props }: { props: { initialTime: number, setStepDone: () => void } }) => {
  const { initialTime, setStepDone } = props
  const { time, play, pause, reset } = useTimer(initialTime)

  const isTimeUp = () => time == 0

  useEffect(() => {
    if (isTimeUp()) setStepDone()
  }, [time])

  return (
    <>
      <StyledTimer>
        <Clock time={time} />
        <div>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={reset}>Reset</button>
        </div>
      </StyledTimer>
    </>
  )
}

const StyledTimer = styled.div`
  display: flex;
  flex-direction: column;
`

export default Timer
