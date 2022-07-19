
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Clock from '../../components/Clock'

describe('Clock', () => {
  it('formats to mm:ss', () => {
    render(<Clock time={102} />)

    expect(screen.queryByText(/01:42/)).toBeTruthy()
  })
})
