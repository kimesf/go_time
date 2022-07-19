import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react'
import { useTimer, Timer } from '../../../utils/hooks/use_timer'
import { fastForwardInSec, fire } from '../../helpers'

let result: { current: Timer }

describe('useTimer', () => {
  jest.useFakeTimers()

  beforeEach(() => {
    result = renderHook(() => useTimer(42)).result
  })

  describe('When initialized', () => {
    it('sets initial time with given argument', () => {
      expect(result.current.time).toEqual(42)
    })
  })

  describe('When hits zero', () => {
    it('stops', () => {
      const { result } = renderHook(() => useTimer(1))

      fire(result.current.play)
      // have to invoke it twice of useEffect changes are not caught
      fastForwardInSec(1)
      fastForwardInSec(1)

      expect(result.current.time).toEqual(0)
    })
  })

  describe('When is already zero', () => {
    it('play does nothing', () => {
      const { result } = renderHook(() => useTimer(0))

      fire(result.current.play)
      fastForwardInSec(100)

      expect(result.current.time).toEqual(0)
    })
  })

  describe('When play is called', () => {
    it('starts timer ticking', () => {
      fire(result.current.play)
      fastForwardInSec(35)

      expect(result.current.time).toEqual(7)
    })
  })

  describe('When pause is called', () => {
    it('stops timer ticking', () => {
      fire(result.current.play)
      fastForwardInSec(32)

      expect(result.current.time).toEqual(10)

      fire(result.current.pause)
      fastForwardInSec(9)

      expect(result.current.time).toEqual(10)
    })
  })

  describe('When reset is called', () => {
    it('sets time to first given argument', () => {
      fire(result.current.play)
      fastForwardInSec(2)

      expect(result.current.time).toEqual(40)

      fire(result.current.reset)

      expect(result.current.time).toEqual(42)
    })

    it('prevents timer from ticking', () => {
      fire(result.current.play)
      fastForwardInSec(2)
      fire(result.current.reset)
      fastForwardInSec(10)

      expect(result.current.time).toEqual(42)
    })
  })
})
