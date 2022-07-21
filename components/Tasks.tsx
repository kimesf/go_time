import styled from 'styled-components'
import ActionsNeeded from './ActionsNeeded'
import Task from './Task'
import { ColumnContainer } from '../components/shared'

const tempActions = [
  {
    task: { name: 'Pedido #9889' },
    subtask: {
      name: 'New York',
      tags: ['1x Lemon Up', '3x Nutellas'],
    },
    currentStep: { name: 'Forno primeiro lado' },
    nextStep: { name: 'Forno segundo lado' },
  },
  {
    task: { name: 'Pedido #1234' },
    subtask: {
      name: 'Recheado',
      tags: ['1x Lemon Up', '3x Nutellas'],
    },
    currentStep: { name: 'Forno segundo lado' },
    nextStep: { name: 'Descanso' },
  }
]

const Tasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <StyledTasks>
      <ActionsNeeded actions={tempActions} />
      {tasks.map((task) => {
        return <Task props={task} key={task.name} />
      })}
    </StyledTasks>
  )
}

const StyledTasks = styled(ColumnContainer)`
  width: 100%;
  gap: var(--spacing-medium);
`

export default Tasks
