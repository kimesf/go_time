import { useState } from 'react'
import styled from 'styled-components'
import { Card, Pills } from './shared'
import Step from './Step'

interface Subtask {
  name: string
  steps: Step[]
  tags: string[]
}

const firstStep = 0

const Subtask = ({ props }: { props: Subtask }) => {
  const { name, tags, steps } = props
  const [currentStep, setCurrentStep] = useState(firstStep)

  const setStepDone = () => setCurrentStep(currentStep + 1)
  const areAllStepsDone = () => currentStep == steps.length

  const CurrentStep = () => {
    if (areAllStepsDone()) return <div>DONE!</div>

    return <Step props={{ step: steps[currentStep], setStepDone }} />
  }

  return (
    <StyledSubtask>
      <Card>
        <Header>
          <CurrentStep />
          <Info>
            <Subtitle>
              {name}
            </Subtitle>
            <Pills props={tags} />
          </Info>
        </Header>
        <ProgressBar>
          {steps.map((step, index) => {
            return <Partial key={index}>{step.name}</Partial>
          })}
        </ProgressBar>
      </Card>
    </StyledSubtask>
  )
}

const StyledSubtask = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`

const Subtitle = styled.div`
  font-size: 1.2rem;
`

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-around;
`

const Partial = styled.div``

export default Subtask
