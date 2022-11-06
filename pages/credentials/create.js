import { useRouter } from 'next/router';
import { useState } from 'react';
import CredentialForm from '../../components/credentials/CredentialForm';
import { supabase } from '../../supabase-client';
import { useSession } from '@supabase/auth-helpers-react'
import LoggedInAppFrame from '../../components/LoggedInAppFrame'

export default function NewTokenPlan() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [tokenName, setTokenName] = useState('')
  const router = useRouter()
  const session = useSession()

  return (
    <LoggedInAppFrame headerTitle="Create new credential">
      <div>
        <CredentialForm
          heading="Create new credential"
        // name={name}
        // onNameChange={(evt) => setName(evt.target.value)}
        // description={description}
        // onDescriptionChange={(evt) => setDescription(evt.target.value)}
        // tokenName={tokenName}
        // onTokenNameChange={(evt) => setTokenName(evt.target.value)}
        // onSubmit={async (evt) => {
        //   evt.preventDefault();
        //   const { data, error } = await supabase
        //     .from('credentials')
        //     .insert({
        //       name: name,
        //       description: description,
        //       token_name: tokenName,
        //       user_id: session.user.id
        //     })

        //   router.push('/certificates')
        // }}
        />
      </div>
    </LoggedInAppFrame>
  )
}