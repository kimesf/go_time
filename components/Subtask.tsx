import { useState } from 'react'
import styled from 'styled-components'
import Step from './Step'

interface Subtask {
  description: string
  steps: Step[]
  tags: string[]
}

const firstStep = 0

const Subtask = ({ props }: { props: Subtask }) => {
  const { description, tags, steps } = props
  const [currentStep, setCurrentStep] = useState(firstStep)

  const setStepDone = () => setCurrentStep(currentStep + 1)

  const areAllStepsDone = () => currentStep == steps.length

  const CurrentStep = () => {
    if (areAllStepsDone()) return <div>DONE!</div>

    return <Step props={{ step: steps[currentStep], setStepDone }} />
  }

  return (
    <StyledSubtask>
      <div>
        <CurrentStep />
      </div>
      <div>
        {description}
      </div>
      <div>
        {tags.map((tag) => {
          return tag
        })}
      </div>
    </StyledSubtask>
  )
}

const StyledSubtask = styled.div`
  display: flex;
  background-color: pink;
  margin-top: 1rem;
`

export default Subtask
