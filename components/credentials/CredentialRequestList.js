import { supabase } from '../../supabase-client'
import { useRouter } from 'next/router'

const CredentialRequestList = ({ requests }) => {
  const router = useRouter()
  return (
    <table className="min-w-full divide-y divide-grey-800">
      <thead>
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-500 sm:pl-6 md:pl-0"
          >
            Created
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-500">
            Requestor
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-500">
            Type
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-500">
            Issuer
          </th>
          <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-500">
            Status
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
            <span className="sr-only">Claim</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {requests.map((request) => (
          <tr key={request.id}>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-200">{request.created_at}</td>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-200">{request.requestor_id}</td>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-200">{request.credential_type}</td>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-200">{request.issuer}</td>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-200">{request.status}</td>
            {request.status == 'PENDING REVIEW' &&
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                <a
                  className="text-red-500 hover:text-red-400"
                  href="#"
                  onClick={async (evt) => {
                    const { data, error } = await supabase
                      .from('credential_requests')
                      .delete()
                      .match({ id: request.id })

                    router.replace(`/credentials`)
                  }}
                >Cancel<span className="sr-only">, {request.id}</span>
                </a>
              </td>
            }
            {request.status == 'READY TO CLAIM' &&
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                <a target="_blank" href={request.claim_url} className="text-greene hover:text-green-400">
                  Claim<span className="sr-only">, {request.id}</span>
                </a>
              </td>
            }
          </tr>
        ))
        }
      </tbody >
    </table >
  )
}

export default CredentialRequestList
