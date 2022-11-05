import Login from '../components/Login'
import LoggedOutHeader from '../components/LoggedOutHeader'

const LoginPage = (props) => {

  return (
    <div>
      <LoggedOutHeader />
      <Login />
    </div>
  )
}

export default LoginPage