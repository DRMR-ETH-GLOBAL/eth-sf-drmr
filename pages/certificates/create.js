import { useRouter } from 'next/router';
import { useState } from 'react';
import TokenPlanForm from '../../components/token-plans/token-plan-form';
import { supabase } from '../../supabase-client';
import { useSession } from '@supabase/auth-helpers-react'

export default function NewTokenPlan() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [tokenName, setTokenName] = useState('')
  const router = useRouter()
  const session = useSession()

  return (
    <>
      <h1>Create new token plan</h1>
      <TokenPlanForm
        name={name}
        onNameChange={(evt) => setName(evt.target.value)}
        description={description}
        onDescriptionChange={(evt) => setDescription(evt.target.value)}
        tokenName={tokenName}
        onTokenNameChange={(evt) => setTokenName(evt.target.value)}
        onSubmit={async (evt) => {
          evt.preventDefault();
          const { data, error } = await supabase
            .from('token_plans')
            .insert({
              name: name,
              description: description,
              token_name: tokenName,
              user_id: session.user.id
            })

          router.push('/certificates')
        }}
      />
    </>
  )
}