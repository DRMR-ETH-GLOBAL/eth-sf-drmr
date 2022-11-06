import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useWeb3React } from '@web3-react/core'
import { Injected } from '../connectors'
import LoggedInAppFrame from './LoggedInAppFrame'
import { PlusIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()
  const { chainId, account, activate, active } = useWeb3React()
  const [hasPolygonId, setHasPolygonId] = useState(true)
  const [loading, setLoading] = useState(true)
  const supabase = useSupabaseClient()

  const onClick = () => {
    activate(Injected)
  }

  useEffect(() => {
    getPolygonIdIdentifier()
  }, [session])

  async function getPolygonIdIdentifier() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`polygon_id_identifier`)
        .eq('id', session.user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data && data.polygon_id_identifier == null) {
        setHasPolygonId(true)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <LoggedInAppFrame headerTitle="Dashboard">
      <div>
        {!hasPolygonId &&
          <div className="mb-5 rounded-md bg-yellow-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Connect a Polygon ID to your account to complete setup.</h3>
                <div className="mt-4">
                  <div className="-mx-2 -my-1.5 flex">
                    <button
                      type="button"
                      className="rounded-md bg-yellow-50 px-2 py-1.5 text-sm font-medium text-yellow-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50"
                      onClick={async (evt) => {
                        router.replace(`/account`)
                      }}
                    >
                      Go to Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <div className="mb-5 shadow sm:rounded-lg bg-grey-900">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-white">Request Credential</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Verify your identity, residence, or other attributes and receive a DRMR credential.</p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="btn-primary"
                onClick={async (evt) => {
                  router.replace(`/credentials/request`)
                }}
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Request Credential
              </button>
            </div>
          </div>
        </div>

        <div className="mb-5 shadow sm:rounded-lg bg-grey-900">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-white">Request Credential From Third Party</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Submit a request for a verified DRMR credential from another party.</p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="btn-primary"
                onClick={async (evt) => {
                  router.replace(`/credentials/request`)
                }}
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Request Third Party Credential
              </button>
            </div>
          </div>
        </div>

        <div className="mb-5 shadow sm:rounded-lg bg-grey-900">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-white">Validate Credential</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Validate the verification status of an existing DRMR credential.</p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="btn-primary"
                onClick={async (evt) => {
                  router.replace(`/credentials/validate`)
                }}
              >

                <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Validate Credential
              </button>
            </div>
          </div>
        </div>
      </div>
    </LoggedInAppFrame >
  )
}

export default Dashboard
