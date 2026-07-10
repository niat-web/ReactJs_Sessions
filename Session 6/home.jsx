import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

function Home() {
  const jwtToken = Cookies.get('jwt_token')

  // If the token is undefined, redirect the user to the login page
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace />
  }

  // If the token exists, show the Home page content
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
export default Home
