import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [auth, setAuth] = useState(false);
    useEffect(()=>{
        const checkToken = async() => {
            const token = localStorage.getItem("authToken");
            const user = JSON.parse(localStorage.getItem("user"));
            if(token && user){
                setAuth(true);
            }
            setLoading(false);
        }
        checkToken();
    },[]);
    return (
        <AuthContext.Provider value={{ loading, auth, setLoading, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}