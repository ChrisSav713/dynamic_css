import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
  const context = useContext(ThemeContext)

  //Incase its being used out of context's scope
  if (context === undefined) {
    throw new Error('useTheme() must be used inside a ThemeProvider')
  }
  return context
}
