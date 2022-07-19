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
      <Header>
        <CurrentStep />
        <Info>
          <Subtitle>
            {description}
          </Subtitle>
          <Pills>
            {tags.map((tag) => {
              return <Pill key={tag}>{tag}</Pill>
            })}
          </Pills>
        </Info>
      </Header>
      <ProgressBar>
        {steps.map((step, index) => {
          return <Partial key={index}>{step.description}</Partial>
        })}
      </ProgressBar>
    </StyledSubtask>
  )
}

const StyledSubtask = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid grey;
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

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Pill = styled.div`
  border: 1px solid grey;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.25rem 0.4rem;
  border-radius: 15px;
  background-color: pink;
`

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-around;
`

const Partial = styled.div``

export default Subtask
