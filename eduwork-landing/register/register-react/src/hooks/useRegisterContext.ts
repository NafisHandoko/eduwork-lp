import { RegisterContext } from "../context/RegisterContext"
import { useContext } from "react"

export const useRegisterContext = () => {
  const context = useContext(RegisterContext)

  if(!context) {
    throw Error('useRegisterContext must be used inside an RegisterContextProvider')
  }

  return context
}