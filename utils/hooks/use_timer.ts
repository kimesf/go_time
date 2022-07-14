import { useEffect, useReducer } from 'react'

const ONE_SECOND_IN_MS = 1000

enum ActionTypes {
  PLAY = 'play',
  PAUSE = 'pause',
  RESET = 'reset',
  TICK = 'tick',
}

interface Action {
  type: ActionTypes
}

interface Timer {
  seconds: number
  currentSeconds: number
  isRunning: boolean
}

interface UseTimer {
  time: number,
  play: () => void
  pause: () => void
  reset: () => void
}

const initialState = (seconds: number): Timer => {
  return {
    seconds,
    currentSeconds: seconds,
    isRunning: false,
  }
}

const reducer = (state: Timer, action: Action): Timer => {
  switch (action.type) {
    case ActionTypes.PLAY:
      return {
        ...state,
        isRunning: true
      }

    case ActionTypes.PAUSE:
      return {
        ...state,
        isRunning: false
      }

    case ActionTypes.TICK:
      return {
        ...state,
        currentSeconds: state.currentSeconds - 1
      }

    case ActionTypes.RESET:
      return {
        ...state,
        currentSeconds: state.seconds,
        isRunning: false
      }

    default:
      return state
  }
}

const useTimer = (seconds: number): UseTimer => {
  const [state, dispatch] = useReducer(reducer, initialState(seconds))
  const { currentSeconds, isRunning } = state

  const tick = () => { dispatch({ type: ActionTypes.TICK }) }
  const play = () => { dispatch({ type: ActionTypes.PLAY }) }
  const pause = () => { dispatch({ type: ActionTypes.PAUSE }) }
  const reset = () => { dispatch({ type: ActionTypes.RESET }) }

  useEffect(() => {
    if (!isRunning) return
    if (currentSeconds == 0) {
      pause()
      return
    }

    const id = setInterval(tick, ONE_SECOND_IN_MS)
    return () => clearInterval(id)
  }, [isRunning, currentSeconds])

  return { time: state.currentSeconds, play, pause, reset } as const
}

export { useTimer, type UseTimer, ONE_SECOND_IN_MS }
