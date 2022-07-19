import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Task from '../../components/Task'

import Subtask from '../../components/Subtask'
jest.mock('../../components/Subtask', jest.fn)

describe('Given a Task', () => {
  const subtask1 = {
    description: 'desc 1',
    steps: [
      {
        time: 1,
        description: 'desc step 1',
      },
    ],
    tags: ['tag 1']
  }

  const subtask2 = {
    description: 'desc 2',
    steps: [
      {
        time: 2,
        description: 'desc step 2',
      },
    ],
    tags: ['tag 2']
  }

  const task = {
    name: 'name',
    tags: ['Custom'],
    subtasks: [subtask1, subtask2]
  }

  describe('When initialized', () => {
    beforeEach(() => {
      render(<Task props={task} />)
    })

    it('Should pass on substasks props to their component', () => {
      expect(Subtask).toHaveBeenNthCalledWith(1, { props: subtask1 }, {})
      expect(Subtask).toHaveBeenNthCalledWith(2, { props: subtask2 }, {})
    })

    it('Should render name', () => {
      expect(screen.getByText(/name/i)).toBeInTheDocument()
    })

    it('Should render tags', () => {
      expect(screen.getByText(/custom/i)).toBeInTheDocument()
    })
  })
})
