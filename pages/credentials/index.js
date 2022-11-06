import { supabase } from '../../supabase-client'
import LoggedInAppFrame from '../../components/LoggedInAppFrame'
import { PlusIcon, CheckIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import CredentialRequestList from '../../components/credentials/CredentialRequestList'
import CredentialRequestThirdPartyList from '../../components/credentials/CredentialRequestThirdPartyList'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

const Credentials = ({ credential_requests, requestedThirdPartyCredentials, session }) => {
  const router = useRouter()

  return (
    <LoggedInAppFrame headerTitle="Credentials">
      <div>
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Requested Credentials</h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              href="/credentials/create"
              onClick={async (evt) => {
                router.replace(`/credentials/request`)
              }}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Request Own Credential
            </button>

          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <CredentialRequestList requests={credential_requests} session={session} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <CredentialRequestThirdPartyList requests={requestedThirdPartyCredentials} session={session} />
            </div>
          </div>
        </div>
      </div>
    </LoggedInAppFrame>
  )
}

export const getServerSideProps = async (context) => {
  const supabaseAuth = createServerSupabaseClient(context)
  const {
    data: { session },
  } = await supabaseAuth.auth.getSession()

  const { data: credential_requests, credentials_requests_error } =
    await supabase
      .from('credential_requests')
      .select()
      .or(`user_id.eq.${session.user.id},requested_third_party_email.eq.${session.user.email}`)

  const { data: requestedThirdPartyCredentials, requestedThirdPartyCredentialsError } =
    await supabase
      .from('credential_requests')
      .select()
      .eq('requestor_id', session.user.id)

  if (credentials_requests_error || requestedThirdPartyCredentialsError) {
    // Return 404 response.
    return {
      notFound: true,
    }
  }

  return {
    props: {
      credential_requests,
      requestedThirdPartyCredentials,
      session
    }
  }
}

export default Credentials