import { supabase } from '../../supabase-client'
import LoggedInAppFrame from '../../components/LoggedInAppFrame'
import { PlusIcon, CheckIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import CredentialRequestList from '../../components/credentials/CredentialRequestList'

const Credentials = ({ credential_requests }) => {
  const router = useRouter()

  return (
    <LoggedInAppFrame headerTitle="Credentials">
      <div>
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-white">Requested Credentials</h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              href="/credentials/create"
              onClick={async (evt) => {
                router.replace(`/credentials/request`)
              }}
              className="btn-primary"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Request New Credential
            </button>

          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <CredentialRequestList requests={credential_requests} />
            </div>
          </div>
        </div>
      </div>
    </LoggedInAppFrame>
  )
}

export const getServerSideProps = async (context) => {
  const { data: credentials, credentials_error } = await supabase.from('credentials').select();
  const { data: credential_requests, credentials_requests_error } = await supabase.from('credential_requests').select()

  console.log('requests: ', credential_requests)

  if (credentials_error || credentials_requests_error) {
    // Return 404 response.
    return {
      notFound: true,
    }
  }

  return {
    props: {
      credentials,
      credential_requests,
    }
  }
}

export default Credentials
