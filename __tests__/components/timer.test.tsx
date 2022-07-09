import { act, render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Timer from '../../components/timer'

describe('Timer', () => {
  it('renders correctly', () => {
    // todo
  })

  describe('Actions', () => {
    jest.useFakeTimers()

    beforeEach(() => {
      render(<Timer seconds={42} />)
    })

    it('playing works', () => {
      clickButton('Play')
      fastForward(35)

      expect(screen.getByText(/00:07/i)).toBeInTheDocument()
    })

    it('pausing works', () => {
      clickButton('Play')
      fastForward(32)
      expect(screen.getByText(/00:10/i)).toBeInTheDocument()

      clickButton('Pause')
      fastForward(9)
      expect(screen.getByText(/00:10/i)).toBeInTheDocument()
    })

    it('reseting works', () => {
      clickButton('Play')
      fastForward(41)
      expect(screen.getByText(/00:01/i)).toBeInTheDocument()

      clickButton('Reset')
      expect(screen.getByText(/00:42/i)).toBeInTheDocument()
    })
  })
})



function fastForward(seconds: number): void {
  act(() => {
    jest.advanceTimersByTime(seconds * 1000)
  })
}

function clickButton(name: string): void {
  const button = screen.getByRole('button', { name: name })

  fireEvent.click(button)
}
