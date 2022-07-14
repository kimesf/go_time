import styled from 'styled-components'
import Subtask from './Subtask'
import { ColumnContainer, Pills, Section } from './shared_styles'

interface Task {
  name: string
  tags: string[]
  subtasks: Subtask[]
}

const Task = ({ props }: { props: Task }) => {
  const { name, tags, subtasks } = props

  return (
    <StyledTask>
      <Section title={name}>
        {{
          body: (
            <Body>
              {subtasks.map((subtask, index) => {
                return <Subtask key={index} props={subtask} />
              })}
            </Body>
          ),
          tip: <Pills props={tags} />,
        }}
      </Section>
    </StyledTask>
  )
}

const Body = styled(ColumnContainer)`
  gap: var(--spacing-medium);
`

const StyledTask = styled(ColumnContainer)`
  padding-top: var(--spacing-medium);
  border-top: 2px dashed var(--color-grey);
`

export default Task
