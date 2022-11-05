import { useSession } from '@supabase/auth-helpers-react'
import Dashboard from '../components/Dashboard'
import Landing from '../components/landing/Landing'

const Home = () => {
  const session = useSession()

  return (
    <div>
      {!session ? (
        <Landing />
      ) : (
        <Dashboard session={session} />
      )}
    </div>
  )
}

export default Home