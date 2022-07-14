import styled from 'styled-components'
import Step from './Step'
import Subtask from './Subtask'
import Task from './Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { Card, ColumnContainer, Section, Text, Pills, RowContainer } from './shared_styles'

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
        return (
          <Section
            title={action.task.name!}
            subtitle={action.subtask.name}
            key={index}
          >
            {{
              body: <Body action={action} />,
              tip: <Pills props={action.subtask.tags!} />,
            }}
          </Section>
        )
      })}
    </StyledActionPanel>
  )
}

const StyledActionPanel = styled(ColumnContainer)`
  width: 100%;
  gap: var(--spacing-medium);
`

const Body = ({ action }: { action: Action }) => {
  return (
    <StyledBody>
      <Card>
        <Action action={action} />
      </Card>
      <ActionButton>
        <Text bold uppercase size='large'>done</Text>
      </ActionButton>
    </StyledBody>
  )
}

const StyledBody = styled(RowContainer)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-minor);
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

const Action = ({ action }: { action: Action }) => {
  const { currentStep, nextStep } = action

  return (
    <StyledAction>
      <Info>
        <Text lowercase>{currentStep.name}</Text>
        <FontAwesomeIcon className="dividor" icon={faAnglesRight} />
        <Text uppercase bold className="larger">{nextStep.name}</Text>
      </Info>
    </StyledAction>)
}

const StyledAction = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  display: flex;
  width: 100%;
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

export default ActionPanel
