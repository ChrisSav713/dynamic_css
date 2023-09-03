import { createContext, useReducer } from 'react'
import { colors } from '../enum/styleEnums'

export const StyleContext = createContext()

const styleReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload }
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload }
    default:
      return state
  }
}

export function StyleProvider({ children }) {
  const [state, dispatch] = useReducer(styleReducer, {
    color: colors[8],
    mode: 'light'
  })

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color })
  }
  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode })
  }

  return (
    <StyleContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </StyleContext.Provider>
  )
}
