import { act } from 'react-dom/test-utils'
import { screen, fireEvent } from '@testing-library/react'

// this file only contains helpers
// TODO: (id: 2) remove skip by configuring jest to ignore it
// see https://stackoverflow.com/a/68523435/10331739
test.skip('Skip helpers file', () => { })

const fastForwardInSec = (seconds: number): void => {
  act(() => { jest.advanceTimersByTime(seconds * 1000) })
}

const fire = (fn: () => void): void => {
  act(() => fn())
}

const clickButton = (name: string): void => {
  const button = screen.getByRole('button', { name: name })

  fireEvent.click(button)
}

export { clickButton, fastForwardInSec, fire }
