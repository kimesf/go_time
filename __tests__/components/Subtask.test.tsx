
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Subtask from '../../components/Subtask'
import { clickButton, fastForwardInSec } from '../helpers'

describe('Given a Subtask', () => {
  jest.useFakeTimers()

  const subtask = {
    description: "New York",
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
    tags: ["x2 All In"]
  }

  beforeEach(() => {
    render(<Subtask props={subtask} />)
  })

  describe('When initialized', () => {
    it('Should render timer for the first given time only', () => {
      expect(screen.queryByText(/11/)).toBeInTheDocument()
      expect(screen.queryByText(/22/)).not.toBeInTheDocument()
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
