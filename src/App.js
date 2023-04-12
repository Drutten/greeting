import { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Header user={user} setUser={setUser} />
      <main>
        {!user && <h2>Hello World!</h2>}
        {!!user && <h2>Hello {user.name}!</h2>}
      </main>
    </>
  );
}

export default App;
