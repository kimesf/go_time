import styled from 'styled-components'
import ActionsNeeded from './ActionsNeeded'
import Task from './Task'
import { ColumnContainer } from '../components/shared'
import { useContext } from 'react'
import { StoreContext } from './StoreProvider'

const Tasks = () => {
  const { tasks, actionsNeeded } = useContext(StoreContext)

  return (
    <StyledTasks>
      <ActionsNeeded actions={actionsNeeded} />
      {tasks.map((task) => {
        return <Task key={task.id.toString()} props={task} />
      })}
    </StyledTasks>
  )
}

const StyledTasks = styled(ColumnContainer)`
  width: 100%;
  gap: var(--spacing-medium);
`

export default Tasks
