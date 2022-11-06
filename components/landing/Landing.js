import { useSession } from '@supabase/auth-helpers-react'
import LoggedOutHeader from '../LoggedOutHeader'

const Home = () => {
  const session = useSession()

  return (
    <div>
      <LoggedOutHeader />
      <div style={{ paddingTop: 100 }}>
        <header className="text-center">
          <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
            {/* {props.title} */}
            Onchain Trust and Identity
          </h1>
          {/* <div className="text-2xl mt-4 mb-16">{props.description}</div> */}
          <div className="text-2xl mt-4 mb-16">Web3-enabled compliance and verification solutions that scale</div>
          {/* {props.button} */}
        </header>
      </div >
    </div>
  )
}

export default Home