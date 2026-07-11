import {useState} from 'react'
import {useNavigate, Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // 1. Auth check runs right after hooks, before any functions
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Navigate to="/" replace />
  }

  // 2. Form submission handler
  const onSubmitForm = async event => {
    event.preventDefault()
    setIsLoading(true)
    setErrorMsg('')

    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    setIsLoading(false)

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {
        expires: 30,
      })
      navigate('/', {replace: true})
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  // 3. Clean JSX structure (satisfying Prettier rules)
  return (
    <div className="login-container">
      <form className="login-card" onSubmit={onSubmitForm}>
        <h2>Login</h2>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={event => setUsername(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">{isLoading ? 'Logging in...' : 'Login'}</button>

        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </div>
  )
}
export default Login
