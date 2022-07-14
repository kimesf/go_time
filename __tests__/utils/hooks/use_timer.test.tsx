import '@testing-library/jest-dom'
import { act, renderHook } from '@testing-library/react'
import { useTimer, UseTimer, ONE_SECOND_IN_MS } from '../../../utils/hooks/use_timer'

let result: { current: UseTimer }

describe('Given useTimer', () => {
  jest.useFakeTimers()

  beforeEach(() => {
    result = renderHook(() => useTimer(42)).result
  })

  describe('When initialized', () => {
    it('Should set initial time with given argument', () => {
      expect(result.current.time).toEqual(42)
    })
  })

  describe('When timer hits zero', () => {
    it('Should stop at zero', () => {
      const { result } = renderHook(() => useTimer(1))

      fire(result.current.play)
      // have to invoke it twice of useEffect changes are not caught
      fastForward(1)
      fastForward(1)

      expect(result.current.time).toEqual(0)
    })
  })

  describe('When timer is already zero', () => {
    it('Should not be able to play', () => {
      const { result } = renderHook(() => useTimer(0))

      fire(result.current.play)
      fastForward(100)

      expect(result.current.time).toEqual(0)
    })
  })

  describe('When play is called', () => {
    it('Should start timer ticking', () => {
      fire(result.current.play)
      fastForward(35)

      expect(result.current.time).toEqual(7)
    })
  })

  describe('When pause is called', () => {
    it('Should stop timer ticking', () => {
      fire(result.current.play)
      fastForward(32)

      expect(result.current.time).toEqual(10)

      fire(result.current.pause)
      fastForward(9)

      expect(result.current.time).toEqual(10)
    })
  })

  describe('When reset is called', () => {
    it('Should set time to first given argument', () => {
      fire(result.current.play)
      fastForward(2)

      expect(result.current.time).toEqual(40)

      fire(result.current.reset)

      expect(result.current.time).toEqual(42)
    })

    it('Should prevent timer from ticking', () => {
      fire(result.current.play)
      fastForward(2)
      fire(result.current.reset)
      fastForward(10)

      expect(result.current.time).toEqual(42)
    })
  })
})

const fastForward = (seconds: number): void => {
  act(() => { jest.advanceTimersByTime(seconds * ONE_SECOND_IN_MS) })
}

const fire = (fn: () => void): void => {
  act(() => fn())
}
