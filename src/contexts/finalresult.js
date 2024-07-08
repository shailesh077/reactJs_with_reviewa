import { createContext, useContext } from "react";

export const Finalresult = createContext({
    resultList: [{
        emoji: "good",
        time: "04:56:05"
    }],
    addResult: (emoji) => {}
})
export const useResult = () => {
    return useContext(Finalresult)
}
export const ResultProvider = Finalresult.Provider