import styled from 'styled-components'
import ActionNeeded from './ActionNeeded'
import { ColumnContainer, Section, Pills } from './shared'

const ActionsNeeded = ({ actions }: { actions: ActionNeeded[] }) => {
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
              body: <ActionNeeded action={action} />,
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

export default ActionsNeeded
