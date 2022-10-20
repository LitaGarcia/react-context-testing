import  {createContext ,useState, useContext} from 'react';

const userContext = createContext();
const userToggleContext = createContext();

export function useUserContext() {
    return useContext(userContext)
}
export function useUserToggleContext() {
    return useContext(userToggleContext)
}

export function UserProvider(props) {
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
        {props.children}
    </userToggleContext.Provider>
</userContext.Provider>)
}