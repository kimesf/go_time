import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@testing-library/react'
import { TASKS_MOCK } from '../fixtures'
import { StoreContext } from '../../components/StoreProvider'
import Tasks from '../../components/Tasks'
import Task from '../../components/Task'
import ActionsNeeded from '../../components/ActionsNeeded'
jest.mock('../../components/Task', jest.fn)

describe('Tasks', () => {
  describe('when initialized', () => {
    beforeEach(() => {
      render(
        <StoreContext.Provider value={{ tasks: TASKS_MOCK, actionsNeeded: [] }}>
          <Tasks />
        </StoreContext.Provider>
      )
    })

    it('renders tasks for all given tasks', () => {
      expect(Task).toHaveBeenNthCalledWith(1, { props: TASKS_MOCK[0] }, {})
      expect(Task).toHaveBeenNthCalledWith(2, { props: TASKS_MOCK[1] }, {})
    })
  })
})
