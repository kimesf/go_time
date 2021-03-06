import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Timer from '../../components/Timer'
import { clickButton, fastForwardInSec } from '../helpers'

import * as hooks from '../../utils/hooks/use_timer'
import Clock from '../../components/Clock'
jest.mock('../../components/Clock', jest.fn)

describe('Timer', () => {
  describe('When initialized', () => {
    it('calls for Clock passing seconds as time', () => {
      render(<Timer props={{ initialTime: 32, setStepDone: jest.fn() }} />)

      expect(Clock).toHaveBeenCalledWith({ time: 32 }, {})
    })
  })

  describe('When time is up', () => {
    jest.useFakeTimers()

    let spySetStepDone: () => void

    beforeEach(() => {
      spySetStepDone = jest.fn()

      render(<Timer props={{ initialTime: 35, setStepDone: spySetStepDone }} />)

      clickButton('Play')
      fastForwardInSec(35)
    })

    it('calls for setStepDone', () => {
      expect(spySetStepDone).toHaveBeenCalledTimes(1)
    })
  })

  describe('When buttons clicked', () => {
    let spyPlay: () => void
    let spyPause: () => void
    let spyReset: () => void

    beforeEach(() => {
      spyPlay = jest.fn()
      spyPause = jest.fn()
      spyReset = jest.fn()

      const initialTime = 50

      jest.spyOn(hooks, 'useTimer').mockImplementation(() => (
        { time: initialTime, play: spyPlay, pause: spyPause, reset: spyReset }
      ))

      render(<Timer props={{ initialTime: initialTime, setStepDone: jest.fn() }} />)
    })

    it('calls useTimer.play for "Play"', () => {
      clickButton('Play')

      expect(spyPlay).toHaveBeenCalledTimes(1)
    })

    it('calls useTimer.pause for "Pause"', () => {
      clickButton('Pause')

      expect(spyPause).toHaveBeenCalledTimes(1)
    })

    it('calls useTimer.reset for "Reset"', () => {
      clickButton('Reset')

      expect(spyReset).toHaveBeenCalledTimes(1)
    })
  })
})
