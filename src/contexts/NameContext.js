import React, { useCallback, useContext, useMemo, useState } from "react"

const NAME_KEY = "name"

const NameContext = React.createContext()

export const NameContextProvider = ({children}) => {

    const [name, setName] = useState(localStorage.getItem(NAME_KEY) || "");

    const changeName = useCallback((input) => {
        setName(input)
        localStorage.setItem(NAME_KEY, input)
    }, [ name])

    const value = useMemo(() => ({
        name, changeName
    }), [name,changeName])

    return (
        <NameContext.Provider value ={value} >
            {children}
        </NameContext.Provider>
    )
}

export const useNameContext= () => useContext(NameContext)

export default NameContext