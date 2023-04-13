import { useState, useRef, useEffect } from 'react';
import UserMenu from './UserMenu';
import Login from './Login';

function Header({user, setUser, setMessage}) {

  const [boxOpen, setBoxOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setBoxOpen(!boxOpen);
  };

  const handleOutsideClick = (e) => {
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
          <Login setUser={setUser} setBoxOpen={setBoxOpen} setMessage={setMessage} />
        </div>}
        {!!user && <div className='user'>
          <span className='user-menu-button' onClick={toggleMenu}>&#9787;</span>
        </div>}
        {(boxOpen && !!user) && <div className="user-menu-box">
          <UserMenu user={user} setUser={setUser} setBoxOpen={setBoxOpen} setMessage={setMessage} />
        </div>}
      </div>
      
    </header>
  )
}

export default Header;
