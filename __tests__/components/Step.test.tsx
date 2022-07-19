import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Timer from '../../components/Timer'
jest.mock('../../components/Timer', jest.fn)

import Step from '../../components/Step'

describe('Step', () => {
  describe('When initialized', () => {
    let mockFn: () => void
    let stepMock: { description: string, time: number }

    beforeEach(() => {
      mockFn = jest.fn()
      stepMock = { description: 'mock', time: 5 }

      render(<Step props={{ step: stepMock, setStepDone: mockFn }} />)
    })

    it('passes step time and setStepDone fn to Timer', () => {
      expect(Timer).toHaveBeenCalledWith({ props: { initialTime: 5, setStepDone: mockFn } }, {})
    })
  })
})
