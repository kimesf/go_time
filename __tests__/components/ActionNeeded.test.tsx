import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ActionNeeded from '../../components/ActionNeeded'

describe('ActionNeeded', () => {
  const actionNeededMock = {
    task: { name: 'task name' },
    subtask: {
      name: 'subtask name',
      tags: ['tag subtask'],
    },
    currentStep: { name: 'current step name' },
    nextStep: { name: 'next step name' },
  }

  describe('when initialized', () => {

    beforeEach(() => {
      render(<ActionNeeded action={actionNeededMock} />)
    })

    it('renders current step name', () => {
      expect(screen.getByText(/current step name/)).toBeInTheDocument()
    })

    it('renders next step name', () => {
      expect(screen.getByText(/next step name/)).toBeInTheDocument()
    })
  })
})
