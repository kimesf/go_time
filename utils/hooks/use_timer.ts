import { useEffect, useReducer } from 'react'

const ONE_SECOND = 1000

enum ActionTypes {
  PLAY = 'play',
  PAUSE = 'pause',
  TICK = 'tick',
  RESET = 'reset',
}

interface Action {
  type: ActionTypes
}

interface Timer {
  seconds: number
  currentSeconds: number
  isRunning?: boolean
}

export default function useTimer(seconds: number):
  readonly [
    Timer,
    {
      play: () => void
      pause: () => void
      reset: () => void
    }
  ] {
  const [state, dispatch] = useReducer(reducer, initialState(seconds))
  const { isRunning } = state

  const tick = () => { dispatch({ type: ActionTypes.TICK }) }
  const play = () => { dispatch({ type: ActionTypes.PLAY }) }
  const pause = () => { dispatch({ type: ActionTypes.PAUSE }) }
  const reset = () => { dispatch({ type: ActionTypes.RESET }) }

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(tick, ONE_SECOND)
      return () => clearInterval(id)
    }
  }, [isRunning])

  return [state, { play, pause, reset }] as const
}

function initialState(seconds: number): Timer {
  return {
    seconds,
    currentSeconds: seconds,
    isRunning: false,
  }
}

function reducer(state: Timer, action: Action): Timer {
  switch (action.type) {
    case 'play':
      if (state.currentSeconds == 0) return state
      return { ...state, isRunning: true }
    case 'pause':
      return { ...state, isRunning: false }
    case 'tick':
      const current = state.currentSeconds
      if (current <= 0) return { ...state, isRunning: false }
      return { ...state, currentSeconds: current - 1 }
    case 'reset':
      return { ...state, currentSeconds: state.seconds, isRunning: false }
    default:
      return state
  }
}

