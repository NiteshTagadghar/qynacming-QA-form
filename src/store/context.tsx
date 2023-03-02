import { createContext, useContext } from "react"
export type GlobalContent = {
  result: Array<object>
  setResult:(c:Array<object>) => void
  currentQuestion:number
  setCurrentQuestion:(c:number) => void
}


export const MyGlobalContext = createContext<GlobalContent>({

result: [],
setResult:() => [],
currentQuestion:0,
setCurrentQuestion:() => 0

})
export const useGlobalContext = () => useContext(MyGlobalContext)