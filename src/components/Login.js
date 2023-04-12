import { useState } from 'react';

function Login({setUser, setBoxOpen}) {

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (value, e) => {
    setFormValues({
      ...formValues,
      [value]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // TODO: Get result from login
    // let result = await authService.login({ email, password });
    let result = {id: 1, name: formValues.email}; // mock

    if (result.error) {
      setLoading(false);
      setError(result.error);
    }
    else {
      setLoading(false);
      setUser(result);
      setBoxOpen(false);
    }
  }

  const resetFormValues = () => {
    setFormValues({
      email: '',
      password: '',
    });
    setError('');
    setLoading(false);
  }

  const displayError = () => (
    <div className={ error ? 'error' : 'not-displayed' }>
      { error }
    </div>
  )

  const displayLoading = () => (
    <div className={ loading ? 'spinner' : 'not-displayed' }>
      Laddar...
    </div>
  )

  const loginForm = () => (
    <form className='login-form' onSubmit={handleSubmit}>
      <div className='form-field'>
        <label htmlFor='email'>Email</label><br/>
        <input 
          type='email' 
          id='email'
          value={formValues.email}
          onChange={(e) => handleChange('email', e)}
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
    </form>
  )

  return (
    <div className='login'>
      <header>
        <h3>Log in</h3>
      </header>
      { displayLoading() }
      { displayError() }
      { loginForm() }
    </div>
  )
}

export default Login;