
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Clock from '../../components/clock'

describe('Clock', () => {
  it('formats given total seconds to mm:ss', () => {
    render(<Clock totalSeconds={102} />)

    expect(screen.queryByText(/01:42/)).toBeTruthy()
  })
})
