import { useEffect, useReducer, Dispatch } from 'react'

const ONE_SECOND = 1000

enum TimerAction {
  PLAY = 'play',
  PAUSE = 'pause',
  TICK = 'tick',
  RESET = 'reset',
}

interface Action {
  type: TimerAction
}

interface Timer {
  seconds: number
  currentSeconds: number
  isRunning?: boolean
}

function useTimer(seconds: number): readonly [Timer, Dispatch<Action>] {
  const [state, dispatch] = useReducer(reducer, initialState(seconds))
  const { isRunning } = state

  useEffect(() => {
    if (!isRunning) return

    const id = setInterval(() => { dispatch({ type: TimerAction.TICK }) }, ONE_SECOND)

    return () => clearInterval(id)
  }, [isRunning])

  return [state, dispatch] as const
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

export { TimerAction, useTimer }
