import { useSession } from '@supabase/auth-helpers-react'
import Hero from './Hero'
import LoggedOutHeader from '../LoggedOutHeader'

const Home = () => {
  const session = useSession()

  return (
    <div>
      <LoggedOutHeader />
      <Hero />
    </div>
  )
}

export default Home