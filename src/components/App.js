import { createContext, useState } from 'react';
import Child from './Child';

export const userContext = createContext();

function App() {
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

  return (
    <>
      <userContext.Provider value={user}>
        <button onClick={changeLogIn}>Change LogIn</button>
        <Child />
      </userContext.Provider>
    </>
  );
}

export default App;
