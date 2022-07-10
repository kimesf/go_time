import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react'
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
      fire(result.current.play)
      fastForward(60)

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

// TODO: where to put this? __test__/helpers ?
function fastForward(seconds: number): void {
  act(() => { jest.advanceTimersByTime(seconds * ONE_SECOND_IN_MS) })
}

function fire(fn: () => void): void {
  act(() => fn())
}
