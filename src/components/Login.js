import { useState } from 'react';

function Login({setUser, setBoxOpen, setMessage}) {

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const [newAccount, setNewAccount] = useState(false);

  const handleChange = (value, e) => {
    setFormValues({
      ...formValues,
      [value]: e.target.value,
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    let response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    });
    const result = await response.json();
    // const username = formValues.username; // mock
    // let result = {id: 1, username}; // mock
    if (result.error) {
      setMessage(result.error);
    }
    else {
      setUser(result);
      resetFormValues();
      setBoxOpen(false);
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage('');
    let response = await fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    });
    const result = await response.json();
    if (result.error) {
      setMessage(result.error);
    }
    else {
      setUser(result);
      resetFormValues();
      setBoxOpen(false);
    }
  }

  const resetFormValues = () => {
    setFormValues({
      username: '',
      password: '',
    });
    setMessage('');
  }

  const changeForm = () => {
    resetFormValues();
    setNewAccount(!newAccount);
  }

  const loginForm = () => (
    <form className='login-form' onSubmit={handleLogin}>
      <div className='form-field'>
        <label htmlFor='username'>Username</label><br/>
        <input 
          type='text' 
          id='username'
          value={formValues.username}
          onChange={(e) => handleChange('username', e)}
          required
        />
      </div>

      <div className='form-field'>
        <label htmlFor='password'>Password</label><br/>
        <input 
          type='password' 
          id='password' 
          value={formValues.password} 
          onChange={(e) => handleChange('password', e)}
          required
        />
      </div>

      <button type='button' onClick={resetFormValues}>Cancel</button>
      <button type='submit' className='submit-button'>Log in</button>
      <button id='account-button' type='button' onClick={changeForm}>
        Register new account
      </button>
    </form>
  )

  const registerForm = () => (
    <form className='login-form' onSubmit={handleRegister}>
      <div className='form-field'>
        <label htmlFor='username'>Username</label><br/>
        <input 
          type='text' 
          id='username'
          value={formValues.username}
          onChange={(e) => handleChange('username', e)}
          required
        />
      </div>

      <div className='form-field'>
        <label htmlFor='password'>Password</label><br/>
        <input
          type='password'
          id='password'
          value={formValues.password}
          onChange={(e) => handleChange('password', e)}
          required
        />
      </div>

      <button type='button' onClick={resetFormValues}>Cancel</button>
      <button type='submit' className='submit-button'>Register</button>
      <button id='account-button' type='button' onClick={changeForm}>
        Log in to existing account
      </button>
    </form>
  )

  return (
    <div className='login'>
      <header>
        {newAccount ? (<h3>Register</h3>) : (<h3>Log in</h3>)}
      </header>
      { newAccount && registerForm() }
      { !newAccount && loginForm() }
    </div>
  )
}

export default Login;