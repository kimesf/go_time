import { useEffect, useReducer } from 'react'

enum ActionTypes {
  PLAY = 'play',
  PAUSE = 'pause',
  RESET = 'reset',
  TICK = 'tick',
}

interface Action {
  type: ActionTypes
}

interface UseTimerState {
  seconds: number
  currentSeconds: number
  isRunning: boolean
}

interface Timer {
  time: number
  play: () => void
  pause: () => void
  reset: () => void
}

function initialState(seconds: number): UseTimerState {
  return {
    seconds,
    currentSeconds: seconds,
    isRunning: false,
  }
}

const reducer = (state: UseTimerState, action: Action): UseTimerState => {
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
  }
}

function useTimer(seconds: number): Timer {
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

    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [isRunning, currentSeconds])

  return { time: state.currentSeconds, play, pause, reset } as const
}

export { useTimer, type Timer }
