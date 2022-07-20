import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Pills from '../../../components/shared/Pills'

describe('Pills', () => {
  describe('When initialized', () => {
    it('renders a pill for each string in props', () => {
      const props = ['test1', 'test2', 'test3']
      render(<Pills props={props} />)

      expect(screen.getByText(/test1/)).toBeInTheDocument()
      expect(screen.getByText(/test2/)).toBeInTheDocument()
      expect(screen.getByText(/test3/)).toBeInTheDocument()
    })
  })
})



