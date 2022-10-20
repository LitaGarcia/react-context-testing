import { UserProvider } from '../UserProvider';
import Child from './Child';

function App() {
  return (
    <>
      <UserProvider>
        <Child />
      </UserProvider>
    </>
  );
}

export default App;
