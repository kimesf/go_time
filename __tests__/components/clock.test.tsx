
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Clock from '../../components/clock'

describe('Given a Clock', () => {
  it('Should format seconds to mm:ss', () => {
    render(<Clock time={102} />)

    expect(screen.queryByText(/01:42/)).toBeTruthy()
  })
})
