import Account from './Account'
import Link from 'next/link'
import { useSession } from '@supabase/auth-helpers-react'
import { useWeb3React } from '@web3-react/core'
import { Injected } from '../connectors'
import LoggedInAppFrame from './LoggedInAppFrame'
import { PlusIcon, CheckIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()
  const { chainId, account, activate, active } = useWeb3React()

  const onClick = () => {
    activate(Injected)
  }

  return (
    <LoggedInAppFrame headerTitle="Dashboard">
      <div className="grid grid-cols-2 gap-4 px-4 py-5 sm:p-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Create DRMR Credential</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Verify your identity, residence, or other parameters and receive a DRMR certificate.</p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={async (evt) => {
                  router.replace(`/certificates/create`)
                }}
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Create New Certificate
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Validate DRMR Credential</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Validate the verification status of a DRMR Credential.</p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={async (evt) => {
                  router.replace(`/certificates/validate`)
                }}
              >

                <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Validate Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </LoggedInAppFrame >
  )
}

export default Dashboard

