
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Subtask from '../../components/Subtask'
import { clickButton, fastForwardInSec } from '../helpers'

describe('Subtask', () => {
  jest.useFakeTimers()

  const subtask = {
    description: 'description',
    steps: [
      {
        time: 11,
        description: 'desc 1',
      },
      {
        time: 22,
        description: 'desc 2',
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

    it('renders description', () => {
      expect(screen.getByText(/description/)).toBeInTheDocument()
    })

    it('renders tags', () => {
      expect(screen.getByText(/tag 1/)).toBeInTheDocument()
      expect(screen.getByText(/tag 2/)).toBeInTheDocument()
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
