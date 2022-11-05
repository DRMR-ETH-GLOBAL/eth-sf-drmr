import Account from '../components/Account'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

const AccountPage = ({ user, session }) => {
  return (
    <Account session={session} user={user} />
  )
}

export default AccountPage

export const getServerSideProps = async (ctx) => {
  // Check if we have a session
  const supabase = createServerSupabaseClient(ctx)
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  return {
    props: {
      session: session,
      user: session.user,
    },
  }
}