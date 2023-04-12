function UserMenu({ user, setUser, setBoxOpen }) {

  const logout = ()=> {
    setUser(null);
    setBoxOpen(false);
  };

  return (
    <ul className='user-menu'>
      <li>{user.name}</li>
      <li onClick={logout}>Logout</li>
    </ul>
  );
};
export default UserMenu;