import { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const displayMessage = () => (
    <div className={ message ? 'message' : 'not-displayed' }>
      { message }
    </div>
  )

  return (
    <>
      <Header user={user} setUser={setUser} setMessage={setMessage} />
      <main>
        { displayMessage() }
        {!user && <h2>Hello World!</h2>}
        {!!user && <h2>Hello {user.username}!</h2>}
      </main>
    </>
  );
}

export default App;
