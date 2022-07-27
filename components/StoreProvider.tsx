import { createContext } from 'react'
import ActionNeeded from '../components/ActionNeeded'
import Task from '../components/Task'
import { randomBytes } from 'crypto'

interface FakeId extends String { }

const initialStoreContextState: {
  tasks: Task[]
  actionsNeeded: ActionNeeded[]
} = {
  tasks: [],
  actionsNeeded: [],
}

const StoreContext = createContext(initialStoreContextState)

// context here, set id for tasks and subtasks
// make childs use context 
// try cleaning up types

const newFakeId = () => randomBytes(16).toString('hex')

const mergeIds = (objects: any[]) => {
  return objects.map((obj) => ({
    ...obj,
    id: newFakeId()
  }))
}

const StoreProvider = ({ children, tasks, actionsNeeded }: {
  children: JSX.Element,
  tasks: any[],
  actionsNeeded: any[],
}) => {
  const tasksWithId = mergeIds(tasks!.map((task) => {
    return { ...task, subtasks: mergeIds(task.subtasks) }
  }))

  const initialState = { ...initialStoreContextState, tasks: tasksWithId, actionsNeeded }

  return (
    <StoreContext.Provider value={initialState}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, type FakeId }
export default StoreProvider
