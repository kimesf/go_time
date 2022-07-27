import styled from 'styled-components'
import { Card, Text, RowContainer } from './shared'
import Step from './Step'
import Subtask from './Subtask'
import Task from './Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

interface ActionNeeded {
  task: Partial<Task>
  subtask: Partial<Subtask>
  currentStep: Partial<Step>
  nextStep: Partial<Step>
}

const ActionNeeded = ({ action }: { action: ActionNeeded }) => {
  const { currentStep, nextStep } = action

  return (
    <StyledActionNeeded>
      <Action>
        <Text lowercase>{currentStep.name}</Text>
        <FontAwesomeIcon className="dividor" icon={faAnglesRight} />
        <Text uppercase bold className="larger">{nextStep.name}</Text>
      </Action>
      <ActionButton>
        <Text bold uppercase size='large'>done</Text>
      </ActionButton>
    </StyledActionNeeded>
  )
}

const StyledActionNeeded = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-minor);
`

const Action = styled(Card)`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-minor);
  align-items: center;

  & > .dividor {
    flex: 1
  }

  & > ${Text} {
    flex: 3
  }

  & > .larger {
      flex: 5
  }
`

const ActionButton = styled.button`
  background-color: var(--color-confirm);
  color: white;
  padding: var(--spacing-minor) 4rem;
  border: none;
  border-bottom: 5px solid var(--color-confirm-darker);
  box-shadow: -2px 2px 5px var(--color-grey);

  &:hover {
    background-color: var(--color-confirm-dark);
  }

  &:active {
    background-color: var(--color-confirm-darker);
  }
`

export default ActionNeeded

