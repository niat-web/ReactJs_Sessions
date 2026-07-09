import {useState} from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="login-container">
      <h2>Login</h2>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        data-testid="email-input"
        value={email}
        onChange={event => {
          setEmail(event.target.value)
        }}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        data-testid="password-input"
        value={password}
        onChange={event => {
          setPassword(event.target.value)
        }}
      />

      <button
        data-testid="login-button"
        type="button"
        onClick={() => alert('Trying to login with: ' + email)}
      >
        Login Now
      </button>
    </div>
  )
}

export default Login
