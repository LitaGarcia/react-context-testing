import { useUserContext, useUserToggleContext } from '../UserProvider';

const Child = () => {
  //usamos aquí nuestros "propios" hooks
  const user = useUserContext();
  const changeLogIn = useUserToggleContext();
  return (
    <>
      <p>I'm a Child Component</p>
      {user && <p> Hello {user.name}</p>}
      <button onClick={changeLogIn}>Change LogIn</button>
    </>
  );
};

export default Child;
