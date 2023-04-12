import { useState, useRef, useEffect } from 'react';
import UserMenu from './UserMenu';
import Login from './Login';

function Header({user, setUser}) {

  const [boxOpen, setBoxOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', close);
    return () => {
      document.removeEventListener('mousedown', close);
    };
  }, []);

  const toggleMenu = () => {
    setBoxOpen(!boxOpen);
  };

  const close = (e) => {
    if (menuRef?.current?.contains(e.target)) {
      return;
    } 
    setBoxOpen(false);
  };

  return(
    <header className='jumbotron'>
      <h1>Useful site</h1>
      <p>Be greeted and feel great</p>
      <div className='user-menu-container' ref={menuRef}>
        {!user && <div className='login-container'>
          <button type='button' className='login-button' onClick={toggleMenu}>Log in</button>
        </div>}
        {(boxOpen && !user) && <div className="user-menu-box">
          <Login setUser={setUser} setBoxOpen={setBoxOpen} />
        </div>}
        {!!user && <div className='user'>
          <span className='user-menu-button' onClick={toggleMenu}>&#9787;</span>
        </div>}
        {(boxOpen && !!user) && <div className="user-menu-box">
          <UserMenu user={user} setUser={setUser} setBoxOpen={setBoxOpen} />
        </div>}
      </div>
      
    </header>
  )
}

export default Header;
