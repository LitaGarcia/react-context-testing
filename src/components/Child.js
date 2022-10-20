import { userContext } from './App';
import { useContext } from 'react';

const Child = () => {
  const user = useContext(userContext);
  return <p>I'm a Child Component</p>;
};

export default Child;
