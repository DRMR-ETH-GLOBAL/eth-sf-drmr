import { supabase } from '../../supabase-client'
import { useRouter } from 'next/router'

const CredentialRequestThirdPartyList = ({ requests, session }) => {
  const router = useRouter()

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
          >
            Created
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
            Requested Third Party
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
            Type
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
            Issuer
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
            Status
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
            <span className="sr-only">Claim</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {requests.map((request) => (
          <tr key={request.id}>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{request.created_at}</td>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{request.requested_third_party_email}</td>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{request.credential_type}</td>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{request.issuer}</td>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{request.status}</td>
          </tr>
        ))
        }
      </tbody >
    </table >
  )
}

export default CredentialRequestThirdPartyList