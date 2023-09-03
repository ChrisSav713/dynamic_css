import { useContext } from 'react'
import { StyleContext } from '../context/StyleContext'

export const useStyle = () => {
  const context = useContext(StyleContext)

  //Incase its being used out of context's scope
  if (context === undefined) {
    throw new Error('useStyle() must be used inside a StyleContext')
  }
  return context
}
