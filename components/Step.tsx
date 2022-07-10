import styled from 'styled-components'
import Timer from './Timer'

interface Step {
  time: number
  description: string
}

const Step = ({ props }: { props: { step: Step, setStepDone: () => void } }) => {
  const { step, setStepDone } = props
  const { time: initialTime, description } = step

  return (
    <StyledStep>
      <Timer props={{ initialTime, setStepDone }} />
      {description}
    </StyledStep>
  )
}

const StyledStep = styled.div``

export default Step
