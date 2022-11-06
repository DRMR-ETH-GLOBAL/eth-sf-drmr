import { useRouter } from 'next/router';
import { useState } from 'react';
import CredentialRequestForm from '../../components/credentials/CredentialRequestForm';
import { supabase } from '../../supabase-client';
import { useSession } from '@supabase/auth-helpers-react'
import LoggedInAppFrame from '../../components/LoggedInAppFrame'

const attributes = [
  { id: 1, name: 'Name', requiredDocumentation: 'Please provide a photocopy of a government-issued identification card, driver\'s license, or passport.' },
  { id: 2, name: 'Birth Date', requiredDocumentation: 'Please provide a photocopy of a government-issued identification card, driver\'s license, or passport.' },
  { id: 3, name: 'Country of Residence', requiredDocumentation: 'Please provide a photocopy of a government-issued identification card, driver\'s license, or passport, as well as a utility bill issued within the last six months sent to your address.' },
  { id: 4, name: 'Nationality', requiredDocumentation: 'Please provide a photocopy of a government-issued identification card, driver\'s license, or passport.' },
  { id: 5, name: 'OFAC Sanction', requiredDocumentation: 'Please provide a photocopy of a government-issued identification card, driver\'s license, or passport.' },
  { id: 6, name: 'Ethereum Address', requiredDocumentation: '' },
  { id: 7, name: 'Near Address', requiredDocumentation: '' },
  { id: 8, name: 'Bitcoin Address', requiredDocumentation: '' },
  { id: 9, name: 'IPFS Address', requiredDocumentation: '' },
  { id: 10, name: 'ENS Address', requiredDocumentation: '' },
]

const issuers = [
  { id: 1, name: 'DRMR', },
  { id: 2, name: 'Jumio', },
  { id: 3, name: 'Veriff', },
]

export default function NewTokenPlan() {
  const [issuerSelected, setIssuerSelected] = useState(issuers[0])
  const [typeSelected, setTypeSelected] = useState(attributes[0])
  const router = useRouter()
  const session = useSession()

  return (
    <LoggedInAppFrame headerTitle="Request new credential">
      <div>
        <CredentialRequestForm
          heading="Request new credential"
          thirdPartyRequest={false}
          attributes={attributes}
          typeSelected={typeSelected}
          setTypeSelected={setTypeSelected}
          issuers={issuers}
          issuerSelected={issuerSelected}
          setIssuerSelected={setIssuerSelected}
          onSubmit={async (evt) => {
            evt.preventDefault();
            const { data, error } = await supabase
              .from('credential_requests')
              .insert({
                credential_type: typeSelected.name,
                issuer: issuerSelected.name,
                requestor_email: session.user.email,
                user_id: session.user.id,
                status: 'PENDING REVIEW'
              })

            // console.log('data: ', data)
            // console.log('error: ', error)
            router.push('/credentials')
          }}
        />
      </div>
    </LoggedInAppFrame>
  )
}