import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Tasks from '../../components/Tasks'
import { TASKS_MOCK } from '../fixtures'

import Task from '../../components/Task'
jest.mock('../../components/Task', jest.fn)

describe('Tasks', () => {
  describe('when initialized', () => {
    beforeEach(() => {
      render(<Tasks tasks={TASKS_MOCK} />)
    })

    it('renders tasks for all given tasks', () => {
      expect(Task).toHaveBeenNthCalledWith(1, { props: TASKS_MOCK[0] }, {})
      expect(Task).toHaveBeenNthCalledWith(2, { props: TASKS_MOCK[1] }, {})
    })
  })
})
