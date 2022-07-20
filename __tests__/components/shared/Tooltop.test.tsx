import '@testing-library/jest-dom'
import { Tooltip } from '../../../components/shared'
import { render, screen } from '@testing-library/react'

describe('Tooltip', () => {
  describe('When initialized', () => {
    it('renders given children', () => {
      render(<Tooltip><div>anything</div></Tooltip>)

      expect(screen.getByText(/anything/)).toBeInTheDocument()
    })
  })
})
