import styled from 'styled-components'

import Timer from './Timer'

interface Step {
  time: number
  description: string
}

const Step = ({ props }: { props: { step: Step, setStepDone: () => void } }) => {
  const { step, setStepDone } = props
  const { time: initialTime } = step

  return (
    // TODO: I might not need this component...
    <StyledStep>
      <Timer props={{ initialTime: initialTime, setStepDone }} />
    </StyledStep>
  )
}

const StyledStep = styled.div``

export default Step
