import React, {useState, useEffect} from "react";
import axios from "axios";

const AuthContext = React.createContext({
    fname: '',
    lname: '',
    email: '',
    username: '',
    isLoggedIn: false,
    onLogin: () => {},
    onLogout: () => {}
});

export const AuthContextProvider = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.get('/api/auth')
        .then((response) => {
            if(response.data.msg === 'User is authenticated.') {
                console.log('user is auth!');
                setIsLoggedIn(true); /////////////////////////////////////////// maybe loginhandler in order to pass name from api (after i use find and pass the found users)
            } else {
                console.log('user is not auth!');
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const loginHandler = () => {
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        axios.get('/api/logout')
        .then((response) => {
            if(response.data.msg === 'Logout is successfull.') {
                setIsLoggedIn(false);
            } else {
                console.log('logout is not successfull.');
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <AuthContext.Provider value={{fname: props.fname,
            lname: props.lname,
            email: props.email,
            username: props.username,
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}>
                {props.children}
            </AuthContext.Provider>
    )
}

export default AuthContext;