import React, {useState, useContext} from 'react';

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext() {
    return useContext(userContext)
}
export function useUserToggleContext() {
    return useContext(userToggleContext)
}

//(props) , props.children
export function UserProvider([children]) {
const [user, setUser] = useState(null);
const changeLogIn = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: 'Manuela',
        mail: 'a@gmail.com',
      });
    }
  };
return (<userContext.Provider value={user}>
    <userToggleContext.Provider value={changeLogIn}>
        {children}
    </userToggleContext.Provider>
</userContext.Provider>)
}