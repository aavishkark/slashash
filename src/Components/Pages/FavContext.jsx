import {createContext,useState} from 'react'
export const FavContext=createContext()
function FavContextProvider({children}){
    const [istrue,setistrue]=useState(true)
    const handleFav=()=>{
        setistrue(false)
    }
    const handleFalse=()=>{
        setistrue(true)
    }
    return(
        <FavContext.Provider value={{istrue,handleFav,handleFalse}}>
            {children}
        </FavContext.Provider>
    )
}
export default FavContextProvider;