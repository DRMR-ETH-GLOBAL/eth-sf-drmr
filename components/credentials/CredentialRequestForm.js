import CredentialTypeSelect from './CredentialTypeSelect'
import IssuerSelect from './IssuerSelect'
import { useRouter } from 'next/router'

export default function CredentialForm({
  attributes,
  thirdPartyEmail,
  setThirdPartyEmail,
  requestThirdParty,
  heading,
  typeSelected,
  setTypeSelected,
  issuers,
  issuerSelected,
  setIssuerSelected,
  onSubmit
}) {
  const router = useRouter()

  return (
    <form className="space-y-8 divide-y divide-grey-800" onSubmit={onSubmit}>
      <div className="space-y-8 divide-y divide-grey-800 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-white">{heading}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Please provide the requested information.
            </p>
          </div>

          {requestThirdParty &&
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                <label htmlFor="username" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
                  Email of Third Party
                </label>
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="flex max-w-lg rounded-md shadow-sm">
                    <input
                      type="email"
                      value={thirdPartyEmail || ''}
                      name="email"
                      id="email"
                      className="form-input"
                      placeholder="you@example.com"
                      onChange={(e) => setThirdPartyEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          }

          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-grey-800 sm:pt-5">
              <CredentialTypeSelect
                attributes={attributes}
                selected={typeSelected}
                setSelected={setTypeSelected}
              >
              </CredentialTypeSelect>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-grey-800 sm:pt-5">
              <label htmlFor="cover-photo" className="block text-sm font-medium text-white sm:mt-px sm:pt-2">
                Supporting documentation
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-700 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-grey-600"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-300">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-greene focus-within:outline-none focus-within:ring-2 focus-within:ring-greene focus-within:ring-offset-2 hover:text-greene"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-grey-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-grey-800 sm:pt-5">
        <IssuerSelect
          issuers={issuers}
          selected={issuerSelected}
          setSelected={setIssuerSelected}
        >
        </IssuerSelect>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="btn-tertiary"
            onClick={async () => {
              router.replace(`/credentials`)
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
