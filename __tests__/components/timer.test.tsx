import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Timer from '../../components/timer'

// TODO: is this a good practice?
// TODO: what other way could I have mocked this to spy on it?
import * as hooks from '../../utils/hooks/use_timer'
import Clock from '../../components/clock'
jest.mock('../../components/clock', jest.fn)


describe('Given a Timer', () => {
  // Am I doing this here? https://kentcdodds.com/blog/avoid-the-test-user
  // Im not sure.
  describe('When initialized', () => {
    it('Should call for useTimer with seconds argument', () => {
      const spy = jest.spyOn(hooks, 'useTimer')
      render(<Timer seconds={100} />)

      expect(spy).toHaveBeenCalledWith(100)
    })

    it('Should call for Clock passing seconds as time', () => {
      render(<Timer seconds={55} />)

      expect(Clock).toHaveBeenCalledWith({ time: 55 }, {})
    })
  })

  // Am I doing this here? https://kentcdodds.com/blog/avoid-the-test-user
  // Maybe not? https://github.com/kentcdodds/advanced-react-patterns/blob/06a16f86d2397c4451da9faf9aeb64cbe4452ff6/src/__tests__/01.js
  describe('When buttons clicked', () => {
    let spyPlay: () => void
    let spyPause: () => void
    let spyReset: () => void

    beforeEach(() => {
      spyPlay = jest.fn()
      spyPause = jest.fn()
      spyReset = jest.fn()

      jest.spyOn(hooks, 'useTimer').mockImplementation(() => (
        { time: 0, play: spyPlay, pause: spyPause, reset: spyReset }
      ))

      render(<Timer seconds={50} />)
    })

    it('Should call useTimer.play for "Play"', () => {
      clickButton('Play')

      expect(spyPlay).toHaveBeenCalledTimes(1)
    })

    it('Should call useTimer.pause for "Pause"', () => {
      clickButton('Pause')

      expect(spyPause).toHaveBeenCalledTimes(1)
    })

    it('Should call useTimer.reset for "Reset"', () => {
      clickButton('Reset')

      expect(spyReset).toHaveBeenCalledTimes(1)
    })
  })
})

// where do I put this?
const clickButton = (name: string): void => {
  const button = screen.getByRole('button', { name: name })

  fireEvent.click(button)
}
