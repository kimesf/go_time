
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Subtask from '../../components/Subtask'
import { clickButton, fastForwardInSec } from '../helpers'

import Pills from '../../components/shared/Pills'
jest.mock('../../components/shared/Pills', jest.fn)

describe('Subtask', () => {
  jest.useFakeTimers()

  const subtask = {
    name: 'test subtask mock',
    steps: [
      {
        time: 11,
        name: 'desc 1',
      },
      {
        time: 22,
        name: 'desc 2',
      },
    ],
    tags: ['tag 1', 'tag 2']
  }

  beforeEach(() => {
    render(<Subtask props={subtask} />)
  })

  describe('When initialized', () => {
    it('render timer for the first given time only', () => {
      expect(screen.queryByText(/11/)).toBeInTheDocument()
      expect(screen.queryByText(/22/)).not.toBeInTheDocument()
    })

    it('renders name', () => {
      expect(screen.getByText(/test subtask mock/)).toBeInTheDocument()
    })

    it('passes tags to Pills', () => {
      expect(Pills).toHaveBeenCalledWith({ props: subtask.tags }, {})
    })
  })

  describe('When all steps are done', () => {
    beforeEach(() => {
      clickButton('Play')
      fastForwardInSec(11)
      clickButton('Play')
      fastForwardInSec(22)
    })

    it('shows done message', () => {
      expect(screen.queryByText(/DONE!/)).toBeInTheDocument()
    })
  })
})
