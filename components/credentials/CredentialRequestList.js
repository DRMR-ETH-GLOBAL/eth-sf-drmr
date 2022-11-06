import CredentialRequestListItem from './CredentialRequestListItem'

const CredentialRequestList = ({ requests }) => {
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
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{request.credential_type}</td>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{request.issuer}</td>
            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{request.status}</td>
            {request.status == 'READY TO CLAIM' &&
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                <a target="_blank" href={request.claim_url} className="text-blue-600 hover:text-blue-900">
                  Claim<span className="sr-only">, {request.id}</span>
                </a>
              </td>
            }
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CredentialRequestList