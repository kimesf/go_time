import styled from 'styled-components'
import Pills from './Pills'
import Step from './Step'
import Subtask from './Subtask'
import Task from './Task'

interface Action {
  task: Partial<Task>
  subtask: Partial<Subtask>
  currentStep: Partial<Step>
  nextStep: Partial<Step>
}

const ActionPanel = ({ actions }: { actions: Action[] }) => {
  return (
    <StyledActionPanel>
      {actions.map((action, index) => {
        return <Action props={{ action }} key={index} />
      })}
    </StyledActionPanel>
  )
}

const Action = ({ props }: { props: { action: Action } }) => {
  const { action } = props
  const { task, subtask, currentStep, nextStep } = action

  return (
    <StyledAction>
      {task.name}
      {subtask.name}
      {currentStep.name}
      {nextStep.name}
      <Pills props={subtask.tags!} />
    </StyledAction>)
}

const StyledActionPanel = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledAction = styled.div`
`
export default ActionPanel
