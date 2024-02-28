import { useContext , createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=> {
    // token variable that takes token from local storage
    const [token, setToken] = useState(localStorage.getItem("token"));

    const [user,setUser] = useState("");
    const [services,setServices] = useState([]);

    // set token in local storage
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !! token;

    // tackling logout funtionality
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem('token');
    }

    //JWT Authentication - to get the currently loggedIn user data

    const userAuthentication = async () =>{
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });

            if(response.ok){
                const data = await response.json();
                console.log("user data",data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.log("Error fetching user data");
        }
    }

    // fetch services data from database
    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service",{
                method:"GET",
            });

            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(`services frontend error ${error}`);
        }
    }

    useEffect(() => {
        getServices();
        userAuthentication();
    },[]);

    return (
        <AuthContext.Provider value={{isLoggedIn,storeTokenInLS , LogoutUser,user,services}}>
            {children}
        </AuthContext.Provider>
    );
};

// consumer

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth use outside of the Provider");
    }
    return authContextValue;
};