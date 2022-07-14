
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Subtask from '../../components/Subtask'
import { clickButton, fastForwardInSec } from '../helpers'

describe('Given a Subtask', () => {
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
    it('Should render timer for the first given time only', () => {
      expect(screen.queryByText(/11/)).toBeInTheDocument()
      expect(screen.queryByText(/22/)).not.toBeInTheDocument()
    })

    it('Should render name', () => {
      expect(screen.getByText(/test subtask mock/)).toBeInTheDocument()
    })

    it('Should render tags', () => {
      expect(screen.getByText(/tag 1/)).toBeInTheDocument()
      expect(screen.getByText(/tag 2/)).toBeInTheDocument()
    })
  })

  describe('When current step is last', () => {
    beforeEach(() => {
      clickButton('Play')
      fastForwardInSec(11)
      clickButton('Play')
      fastForwardInSec(22)
    })

    it('Should show finished message', () => {
      expect(screen.queryByText(/DONE!/)).toBeInTheDocument()
    })
  })
})
