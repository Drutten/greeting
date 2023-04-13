function UserMenu({ user, setUser, setBoxOpen, setMessage }) {

  const logout = async () => {
    let response = await fetch('http://localhost:8080/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.refreshToken}`,
      },
      body: JSON.stringify({token: user.refreshToken}),
    });
    const result = await response.json();
    if (result.error) {
      setMessage(result.error);
    }
    else {
      console.log(JSON.stringify(result));
      setUser(null);
      setBoxOpen(false);
    }
  }

  return (
    <ul className='user-menu'>
      <li>{user.username}</li>
      <li onClick={logout}>Logout</li>
    </ul>
  );
};
export default UserMenu;