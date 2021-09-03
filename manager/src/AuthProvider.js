import React, { createContext} from 'react';
import auth from 'firebase';


const AuthContext = createContext();

export const Authenticater = ({ children }) => {
    return (
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider>
    )
}