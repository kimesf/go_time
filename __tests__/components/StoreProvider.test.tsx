import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { useContext } from 'react'
import StoreProvider, { StoreContext } from '../../components/StoreProvider'
import { TASKS_MOCK } from '../fixtures'

const FakeComponent = () => {
  const { tasks } = useContext(StoreContext)

  const pluckIds = (objs: any[]) => objs.map(obj => obj.id).filter(id => id !== undefined)

  const task_ids = pluckIds(tasks)
  const subtask_ids = tasks.flatMap(task => pluckIds(task.subtasks))

  return (
    <>
      {task_ids.map(id => <div key={id.toString()}>task</div>)}
      {subtask_ids.map(id => <div key={id.toString()}>sub</div>)}
    </>
  )
}

describe('StoreProvider', () => {
  describe('when initialized', () => {
    it('gives ids for tasks and its subtasks', () => {
      const tasks_length = TASKS_MOCK.length
      const subtasks_length = TASKS_MOCK.flatMap(task => task.subtasks).length

      const tasksMockWithoutId = TASKS_MOCK.map(task => {
        const copy = {
          ...task,
          subtasks: task.subtasks.map(subtask => {
            const copy = { ...subtask }
            // I expect id not to exist here yet
            // @ts-expect-error
            delete copy.id
            return copy
          })
        }
        // I expect id not to exist here yet
        // @ts-expect-error
        delete copy.id
        return copy
      })

      render(
        <StoreProvider tasks={tasksMockWithoutId} actionsNeeded={[]}>
          <FakeComponent />
        </StoreProvider>
      )

      expect(screen.queryAllByText(/task/i)).toHaveLength(tasks_length)
      expect(screen.queryAllByText(/sub/i)).toHaveLength(subtasks_length)
    })
  })
})