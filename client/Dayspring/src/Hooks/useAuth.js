import { useEffect, useState } from "react"

const useAuth = () => {
    const [token,setToken] = useState(localStorage.getItem("token"))

    useEffect(()=> {
        setToken(localStorage.getItem("token"))
    },[])

    return !!token

}

export default useAuth